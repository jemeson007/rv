import express, { json, urlencoded } from "express";
import productRoutes from './products/index';

const port = 3333;
const app = express();

app.use(urlencoded({extended: false}));
app.use(json());

app.get('/', (req, res) => {
    res.send("H, ..W")
})




app.use('/products', productRoutes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })