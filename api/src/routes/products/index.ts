import { Router } from "express";
import { validateData } from "../../middlewares/validationMiddleware";
import { listProducts, getProductsById, updateProducts, createProducts, deleteProducts } from "./productsController";
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';
import { createProductSchema, updateProductSchema , productsTable } from "../../db/schema";


// z.object({
//     name: z.string(),
//     price: z.number()
// });
// type ProductType = z.infer<typeof createProductSchema>;

const router = Router();

router.get('/', listProducts);

router.get('/:id', getProductsById);

router.put('/:id', validateData(updateProductSchema), updateProducts);




router.post('/', validateData(createProductSchema), createProducts);
router.delete('/:id', deleteProducts);

export default router;