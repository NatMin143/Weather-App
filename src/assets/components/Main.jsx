import { useState, useEffect } from "react";
import axios from "axios";

const Main = ({ city }) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast'
    const appId = '6dce9ead0abca1656ce5b863567b6757'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(BASE_URL, {
                    params: {
                        q: city,
                        units: 'metric',
                        appid: appId
                    },

                })

                setData(response.data)
            } catch (error) {
                console.error("Error Fetching Data", error)
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()

    }, [city])

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    console.log(data)
    return (
        <p>HI</p>
    )
}

export default Main;