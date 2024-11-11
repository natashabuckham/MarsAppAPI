import express from "express"
import { PhotoController } from "../controllers/photoController"

const photoRouter = express.Router()

photoRouter.get("/", PhotoController.Index)

export default photoRouter