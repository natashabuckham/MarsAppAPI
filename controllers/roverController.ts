import nasaClient from "../clients/nasaClient"
import Rover from "../models/roverData"

export const RoverController = {
    Index: async (req: any, res: any) => {
        try {
            const roverData: Rover[] | void = await nasaClient.getRoverList()
            const roverNames: string[] = []
            roverData!.forEach((rover: Rover) => roverNames.push(rover.name))

            res.send(roverNames)
        } catch(error) {
            console.error(error)
        }
    }
}