import { useState, useEffect } from "react";

const Forecast = ({date, icon, temp }) => {
    const [day, setDay] = useState("")

    useEffect(() => {
        function getUpperCaseShortDayOfWeek(dateString) {
            const date = new Date(dateString);
            const options = { weekday: 'short' }; // Get the short name of the day
            const shortDay = new Intl.DateTimeFormat('en-US', options).format(date);

            setDay(shortDay.toUpperCase())
        }

        getUpperCaseShortDayOfWeek(date)

    }, [date])


    return (
        <div className="flex flex-col items-center bg-[#18181A] w-[200px] p-8  rounded-xl">
            <div className="flex justify-center border-b-2 border-[#3A3A3E] w-[90px] mb-8">
                <p className="text-white font-bold">{day}</p>
            </div>
            <div className="mb-8">
                <img src={icon} alt="Condition Icon" />
            </div>
            <div>
                <p className="text-white text-3xl font-bold">{temp}°</p>
            </div>
        </div>
    )
}

export default Forecast;