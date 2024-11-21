import { Router } from "express";
import { listProducts, getProductsById, updateProducts, createProducts, deleteProducts } from "./productsController";
const router = Router();

router.get('/', listProducts);

router.get('/:id', getProductsById);

router.put('/:id', updateProducts);


router.post('/', createProducts);
router.delete('/:id', deleteProducts);

export default router;