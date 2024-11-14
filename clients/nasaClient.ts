import dotenv from "dotenv"
import axios, { AxiosResponse } from "axios"
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

interface PathParams {
    rover: string;
}

interface QueryParams {
    sol: number;
    camera: string;
}

export const getRoverList = (): Promise<string | Rover[]> => {
    const apiUrl: string = `https://api.nasa.gov/mars-photos/api/v1/rovers`
    return axios.get(apiUrl, {
        params: {
            api_key: apiKey
        }
    })
        .then((response: AxiosResponse): Rover[] => response.data.rovers)
        .catch((error: Error): string => {
            console.error(error)
                return `Error: ${error}`
        })
}

export const getRoverPhotos = (rover: string, sol: string, camera: string): Promise<void | Photo[]> => {
    const apiUrl: string = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos`
    
    return axios.get(apiUrl, {
        params: {
            sol: sol || "1500",
            camera: camera,
            api_key: apiKey
        }
    })
    .then((response: AxiosResponse): Photo[] => response.data.photos)
    .catch((error: Error): void => {
        console.error(error)
    })
}

