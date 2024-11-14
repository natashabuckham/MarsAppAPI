import express from "express"
import roverRouter from "../routes/roverRouter";
import photoRouter from "../routes/photoRouter";

const app = express()

app.use('/rovers', roverRouter)
app.use('/photos', photoRouter)

export default app