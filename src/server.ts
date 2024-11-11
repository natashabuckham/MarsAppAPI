import express from "express";
import axios from "axios"
import dotenv from "dotenv"

dotenv.config({ path: './.env'})

const app = express();
const port = 5000;

app.use(express.json());
const router = express.Router();
router.get('/test', (req, res: any) => res.send('Hello world!'));
router.get('/rovers', (req, res: any) => {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${process.env.NASA_API_KEY}`)
        .then((response: any) => {
            const rovers = response.data.rovers
            res.send(rovers)
        })
        .catch((error: any) => {
            console.error(error)
            res.send(error)
        })
})

app.use('/', router);

app.listen(port, () => {
  console.log(`Test backend is running on port ${port}`);
});