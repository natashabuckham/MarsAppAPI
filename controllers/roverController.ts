import nasaClient from "../clients/nasaClient"

export const RoverController = {
    Index: async (req: any, res: { send: (arg0: string[]) => void }) => {
        try {
            const roverData = await nasaClient.getRoverList()
            const roverNames: string[] = []
            roverData.forEach((rover: { name: string }) => roverNames.push(rover.name))

            res.send(roverNames)
        } catch(error) {
            console.error(error)
        }
    }
}