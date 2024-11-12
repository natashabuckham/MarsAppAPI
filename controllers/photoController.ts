import nasaClient from "../clients/nasaClient"
import {Photo} from "../models/roverData"

export const PhotoController = {
    Index: async (req: any, res: any) => {
        try {
            const photoData: Photo[] | void = await nasaClient.getRoverPhotos(req.params, req.query)
            const roverPhotoUrls: string[] = []
            photoData!.forEach((photo: Photo) => roverPhotoUrls.push(photo.img_src))

            res.send(roverPhotoUrls)
        } catch(error) {
            console.error(error)
        }
    }
}

// get user-selected params from req object - pass to nasaClient method