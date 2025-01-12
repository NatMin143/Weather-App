import { useState, useEffect } from "react";

const OtherCity = ({ country, city, condition, icon, temp }) => {
    return (
        <div className="flex justify-between items-center space-x-10 bg-[#18181A] rounded-xl px-6 py-3">
            <div className="flex flex-col gap-1">
                <p className="text-gray-500 text-sm">{country}</p>
                <p className="text-white text-lg font-bold">{city}</p>
                <p className="text-gray-300 text-xs">{condition}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src={icon} alt="Condition Icon" />
                <p className="text-white font-bold text-lg">{temp}°</p>
            </div>
        </div>
    )
}

export default OtherCity;