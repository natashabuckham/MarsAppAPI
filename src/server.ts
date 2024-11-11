import express from "express";
import roverRouter from "../routes/roverRouter";

const app = express();
const port = 5000;

app.use('/rovers', roverRouter)

app.listen(port, () => {
  console.log(`Test backend is running on port ${port}`);
});

export default app
