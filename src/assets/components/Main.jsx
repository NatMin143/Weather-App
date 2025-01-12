import { useState, useEffect } from "react";
import axios from "axios";
import profImg from '/images/prof-img.jpg';
import CurrentWeather from './CurrentWeather';
import Forecast from "./Forecast";
import capitalCities from './capitalCities.js';
import fetchData from "./fetchData.js";
import OtherCity from "./OtherCity.jsx";

const Main = ({ city, setCountry, setCityHeader }) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCities, setSelectedCities] = useState([]);

    const key = "71f355a141e7407a94793034251201"

    const base_url = 'https://api.weatherapi.com/v1/current.json/forecast.json'
    const params1 = {
        q: city,
        key: key,
        days: 5
    }

    useEffect(() => {
        const getData = async () => {
            try {
                setError(null)
                setIsLoading(true)
                setSelectedCities([])

                const response = await fetchData(base_url, params1)

                setData(response.data)
                setCountry(response.data.location.country)
                setCityHeader(response.data.location.name)

                const fetchRandomCapitals = async (capitalCities) => {
                    const randomCapitals = [];
    
                    for (let i = 0; i < 4; i++) {
                        const randomIndex = Math.floor(Math.random() * capitalCities.length);
                        const city = capitalCities[randomIndex];
                        const capitalData = await fetchData(base_url, { q: city, key });
                        randomCapitals.push(capitalData.data);
                    }
    
                    setSelectedCities(randomCapitals);
                };
    
                fetchRandomCapitals(capitalCities);

                

            } catch (error) {
                console.error("Error fetching data", error);
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }

        getData();

        // Set an interval to fetch data every 10 minutes (600000ms)
        const intervalId = setInterval(() => {
            getData();
        }, 600000);
        // Cleanup interval on component unmount or city change
        return () => clearInterval(intervalId);

    }, [city])


    // Log data only when it's successfully updated
    useEffect(() => {
        if (data) {
            console.log(data);
        }

    }, [data]);  // Only run when `data` changes

    useEffect(() => {
        if (selectedCities) {
            console.log("SELECTED CITIES",selectedCities);
        }

    }, [selectedCities]); 



    if (isLoading) return <div>Loading...</div>;
    if (error) return <div className="text-white">Error: {error.message}</div>;


    const forecastEl = data.forecast.forecastday.map((forecast, index) => (
        <Forecast
            key={index}
            date={forecast.date}
            icon={forecast.day.condition.icon}
            temp={forecast.day.avgtemp_c}
        />
    ))

    const selectedCitiesEl = selectedCities.map((city, index) => (
        <OtherCity 
            key={index}
            country={city.location.country}
            city={city.location.name}
            condition={city.current.condition.text}
            icon={city.current.condition.icon}
            temp={city.current.temp_c}
        />
    ))


    return (
        <div className="flex mt-4 px-12">
            <div className="flex flex-col mr-6">
                <div className="flex justify-center items-center space-x-10 bg-[#18181A] w-[350px] h-[80px] rounded-xl">
                    <p className="text-white text-xl font-bold">Nathaniel Ministros</p>
                    <img src={profImg} alt="Profile Image" className="w-12 h-12 object-cover rounded-full" />
                </div>

                <CurrentWeather
                    data={data}
                />
            </div>

            <div className="w-3/4 flex flex-col">
                <div className="bg-[#18181A] w-full h-[300px] flex justify-evenly items-center rounded-xl">
                    {forecastEl}
                </div>

                <div className="mt-4">
                    <p className="text-white">Other Cities</p>
                </div>

                <div className="grid grid-cols-2 gap-4 w-fit mt-4">
                    {selectedCitiesEl}
                </div>
            </div>


        </div>
    )
};

export default Main;
