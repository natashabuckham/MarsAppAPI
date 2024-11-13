import dotenv from "dotenv"
import axios from "axios"
import Rover from "../models/roverData"

dotenv.config({path: './.env'})

const apiKey: string | undefined = process.env.NASA_API_KEY
export default class nasaClient {

    static getRoverList(): Promise<void | Rover[]> {
        const apiUrl: string = `https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${apiKey}`
        return axios.get(apiUrl)
            .then((response: any): Rover[] => response.data.rovers)
            .catch((error: any): void => {
                console.error(error)
            })
    }
}