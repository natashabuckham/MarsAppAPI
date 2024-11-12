import dotenv from "dotenv"
import axios from "axios"
import {Rover, Photo} from "../models/roverData"

dotenv.config({path: './.env'})

const apiKey: string | undefined = process.env.NASA_API_KEY

enum Cameras {
    FHAZ = "FHAZ",
    RHAZ = "RHAZ",
    MAST = "MAST",
    CHEMCAM = "CHEMCAM",
    MAHLI = "MAHLI",
    MARDI = "MARDI",
    NAVCAM = "NAVCAM",
    PANCAM = "PANCAM",
    MINITES = "MINITES"
}
export default class nasaClient {

    static getRoverList() {
        const apiUrl: string = `https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${apiKey}`
        return axios.get(apiUrl)
            .then((response: any): Rover[] => response.data.rovers)
            .catch((error: any) => {
                console.error(error)
            })
    }

    static getRoverPhotos() {
        const apiUrl: string = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1500&camera=${Cameras.NAVCAM}&api_key=${apiKey}`
        return axios.get(apiUrl)
        .then((response: any): Photo[] => response.data.photos)
        .catch((error: any) => {
            console.error(error)
        })
    }
}