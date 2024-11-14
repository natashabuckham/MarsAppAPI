import { Request, Response } from "express"
import nasaClient from "../clients/nasaClient"
import Rover from "../models/roverData"

export const RoverController = {
    Index: async (req: Request, res: Response): Promise<any> => {
        try {
            const roverData: Rover[] | string = await nasaClient.getRoverList()

            if (typeof roverData === 'string') {
                return roverData
            }

            const roverNames = roverData.map((rover: Rover) => rover.name)

            res.send(roverNames)
        } catch(error) {
            console.error(error)
            return `Error: ${error}`
        }
    }
}