import express, { Router } from "express";
import productRoutes from './products/index';

const port = 3333;
const app = express();

const router = Router();

app.get('/', (req, res) => {
    res.send("H, ..W")
})




app.use('/products', productRoutes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })