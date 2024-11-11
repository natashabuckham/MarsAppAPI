import express from "express"
import { RoverController } from "../controllers/roverController"

const router = express.Router()

router.get("/rovers", RoverController.Index)

export default router