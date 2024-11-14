import { Request, Response } from "express"
import nasaClient from "../clients/nasaClient"
import Rover from "../models/roverData"

export const RoverController = {
    Index: async (req: Request, res: Response): Promise<any> => {
        try {
            const roverData: Rover[] | string = await nasaClient.getRoverList()

            if (typeof roverData === 'string') {
                return res.send(roverData)
            }

            const roverNames = roverData.map((rover: Rover) => rover.name)

            res.send(roverNames)
        } catch(error) {
            console.error(error)
            res.status(500).json({ error: 'Failed to fetch rover data' })
        }
    }
}