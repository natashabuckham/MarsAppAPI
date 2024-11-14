import express, { Router, Request, Response } from "express"
import { RoverController } from "../controllers/roverController"

const roverRouter = express.Router()

roverRouter.get("/all", RoverController.Index)

export default roverRouter