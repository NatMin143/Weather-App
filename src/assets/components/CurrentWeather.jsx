import { useState, useEffect } from "react";
import sunriseImg from '/images/sunrise.webp'
import sunsetImg from '/images/sunset.webp'

const CurrentWeather = ({ data }) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000); // Update time every second

        // Clean up the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col item-center gradiant-bg w-[350px] h-[550px] rounded-xl mt-4 py-6 px-4">

            <div className="flex justify-between">
                <p className="h-fit p-3 text-sm bg-white rounded-3xl font-bold">{data.location.name}</p>
                <p className="h-fit p-3 text-sm bg-[#3A3A3E] rounded-3xl font-bold text-white">{time}</p>
            </div>

            <div className="mt-6">
                <div className="flex items-center">
                    <img src={data.current.condition.icon} alt="CONDITION ICON" />
                    <p className="text-white font-bold text-lg ml-2">{data.current.condition.text}</p>
                </div>
                <div className="mt-8">
                    <p className="text-white text-7xl font-bold">{data.current.temp_c}°</p>
                </div>
            </div>

            <div className="flex gap-10 mt-6">
                <div className="flex flex-col">
                    <p className="text-gray-500 text-sm mb-1">Pressure</p>
                    <p className="text-gray-300">{data.current.pressure_mb} MB</p>
                </div>

                <div className="flex flex-col">
                    <p className="text-gray-500 text-sm mb-1">Humidity</p>
                    <p className="text-gray-300">{data.current.humidity} %</p>
                </div>

                <div className="flex flex-col">
                    <p className="text-gray-500 text-sm mb-1">Visibility</p>
                    <p className="text-gray-300">{data.current.vis_km} KM</p>
                </div>
            </div>

            <div className="mt-6">
                <div className="flex justify-between bg-[#3A3A3E] h-[80px] rounded-xl pl-4">
                    <div className="flex flex-col justify-center">
                        <p className="text-gray-500 text-base mb-1">Sunrise</p>
                        <p className="text-gray-300">{data.forecast.forecastday[0].astro.sunrise}</p>
                    </div>

                    <img src={sunriseImg} alt="Sunrise Image" className="rounded-r-xl w-[120px] object-cover"/>
                </div>

                <div className="flex justify-between bg-[#3A3A3E] h-[80px] rounded-xl pl-4 mt-2">
                    <div className="flex flex-col justify-center">
                        <p className="text-gray-500 text-base mb-1">Sunset</p>
                        <p className="text-gray-300">{data.forecast.forecastday[0].astro.sunset}</p>
                    </div>

                    <img src={sunsetImg} alt="Sunrise Image" className="rounded-r-xl w-[120px] object-cover"/>
                </div>

            </div>
        </div>
    )
}

export default CurrentWeather;