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

interface PathParams {
    rover: string;
}

interface QueryParams {
    sol: number;
    camera: string;
}

export const getRoverList = () => {
    const apiUrl: string = `https://api.nasa.gov/mars-photos/api/v1/rovers`
    return axios.get(apiUrl, {
        params: {
            api_key: apiKey
        }
    })
        .then((response: any): Rover[] => response.data.rovers)
        .catch((error: any) => {
            console.error(error)
        })
}

export const getRoverPhotos = (reqParams: PathParams, reqQuery: QueryParams) => {
    const apiUrl: string = `https://api.nasa.gov/mars-photos/api/v1/rovers/${reqParams.rover}/photos`
    
    return axios.get(apiUrl, {
        params: {
            sol: reqQuery.sol | 1500,
            camera: reqQuery.camera,
            api_key: apiKey
        }
    })
    .then((response: any): Photo[] => response.data.photos)
    .catch((error: any) => {
        console.error(error)
    })
}

