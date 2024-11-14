import { Request, Response } from "express"
import { getRoverPhotos } from "../clients/nasaClient"
import {Photo} from "../models/roverData"

export const PhotoController = {
    Index: async (req: Request, res: Response) => {
        try {
            const { rover } = req.params
            const { sol, camera } = req.query
            const photoData: Photo[] | void = await getRoverPhotos(rover, sol, camera)
            const roverPhotoUrls: string[] = []
            photoData!.forEach((photo: Photo) => roverPhotoUrls.push(photo.img_src))

            res.send(roverPhotoUrls)
        } catch(error) {
            console.error(error)
        }
    }
}