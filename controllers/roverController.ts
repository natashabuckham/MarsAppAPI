import { Request, Response } from "express"
import nasaClient from "../clients/nasaClient"
import Rover from "../models/roverData"

export const RoverController = {
    Index: async (req: Request, res: Response): Promise<any> => {
        try {
            const roverData: Rover[] | string = await nasaClient.getRoverList()
            const roverNames: string[] = []

            if (typeof roverData === 'string') {
                return roverData
            }

            roverData.forEach((rover: Rover) => roverNames.push(rover.name))

            res.send(roverNames)
        } catch(error) {
            console.error(error)
            return `Error: ${error}`
        }
    }
}