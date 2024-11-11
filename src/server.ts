import express from "express";
import roverRouter from "../routes/roverRouter";
import photoRouter from "../routes/photoRouter";

const app = express();
const port = 5000;

app.use('/rovers', roverRouter)
app.use('/photos', photoRouter)

app.listen(port, () => {
  console.log(`Test backend is running on port ${port}`);
});

export default app
