import app from "../app/index"

const port = 5000;

app.listen(port, () => {
  console.log(`Test backend is running on port ${port}`);
});