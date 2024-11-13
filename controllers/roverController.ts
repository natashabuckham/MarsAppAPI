import { Request, Response } from "express"
import { getRoverList } from "../clients/nasaClient"
import {Rover} from "../models/roverData"

export const RoverController = {
    Index: async (req: Request, res: Response) => {
        try {
            const roverData: Rover[] | void = await getRoverList()
            const roverNames: string[] = []
            roverData!.forEach((rover: Rover) => roverNames.push(rover.name))

            res.send(roverNames)
        } catch(error) {
            console.error(error)
        }
    }
}