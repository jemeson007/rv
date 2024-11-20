import express from "express";
const port = 3333;
const app = express();

app.get('/', (req, res) => {
    res.send("H, ..W")
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })