import axios from "axios";
const fetchData = async (url, params) => {
    try {
        const response = await axios.get(url, {
            params: params,
            timeout: 10000,
        })

        return(response)
    } catch (error) {
        console.error("Fetch error:", error);
        throw error; // rethrow to handle in the calling component
    }
}

export default fetchData;