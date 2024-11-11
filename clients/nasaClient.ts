import dotenv from "dotenv"
import axios from "axios"

class nasaClient {
    apiKey: string | undefined
    
    constructor() {
        this.apiKey = process.env.NASA_API_KEY
    }

    getRoverList() {
        const apiUrl: string = `https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${this.apiKey}`
        return axios.get(apiUrl)
            .then((response: any) => response.json())
    }
}

module.exports = nasaClient