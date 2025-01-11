import { useState, useEffect } from "react";
import searchIcon from '/icons/search.svg';
import locationIcon from '/icons/location.svg';

const Header = ({setCity}) => {
    const [newCity, setNewCity] = useState('Butuan');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        setNewCity(formData.get("city"))
        setCity(formData.get("city"))
        e.target.reset()
    }

    return (
        <div className="flex justify-between items-center w-full bg-[#18181A] px-5 py-6 rounded-xl">
            <div className="flex justify-center items-center w-[300px]">
                <img className="w-6" src={locationIcon} alt="Location Icon" />
                <p className="ml-3 text-lg text-white font-medium">{newCity}</p>
            </div>

            <div>
                <form
                    className="flex bg-[#3A3A3E] w-[500px] py-2 px-4 rounded-lg items-center"
                    onSubmit={handleSubmit} >
                    <button className="flex justify-center items-center" type="submit">
                        <img src={searchIcon} alt="Search Icon" className="w-5"/>
                    </button>

                    <input 
                        type="text" 
                        placeholder="Search City"
                        name = "city"
                        className="border-none focus:outline-none focus:border-none bg-[#3A3A3E] ml-4 text-white"
                        autoComplete="off"
                    />

                </form>
            </div>

            <div>
                <p className="text-white font-bold">HI USER!</p>
            </div>
        </div>
    )
}

export default Header;