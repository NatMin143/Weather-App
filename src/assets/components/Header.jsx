import { useState, useEffect } from "react";
import searchIcon from '/icons/search.svg';
import locationIcon from '/icons/location.svg';

const Header = ({cityHeader, setCity, country}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        setCity(formData.get("city"))
        e.target.reset()
    }

    return (
        <div className="flex justify-between items-center w-full bg-[#18181A] px-6 py-6 rounded-xl">
            <div className="flex justify-center items-center w-[350px]">
                <img className="w-6" src={locationIcon} alt="Location Icon" />
                <p className="ml-3 xs:text-sm lg:text-lg text-white font-medium">{cityHeader}, {country}</p>
            </div>

            <div>
                <form
                    className="flex bg-[#3A3A3E] sm:w-[500px] py-2 px-4 rounded-lg items-center"
                    onSubmit={handleSubmit} >
                    <button className="flex justify-center items-center" type="submit">
                        <img src={searchIcon} alt="Search Icon" className="w-5"/>
                    </button>

                    <input 
                        type="text" 
                        placeholder="Search City"
                        name = "city"
                        className="border-none focus:outline-none focus:border-none bg-[#3A3A3E] ml-4 text-white w-full xs:hidden sm:block"
                        autoComplete="off"
                    />

                </form>
            </div>

            <div>
                <p className="text-white font-bold xs:hidden">HI USER!</p>
            </div>
        </div>
    )
}

export default Header;