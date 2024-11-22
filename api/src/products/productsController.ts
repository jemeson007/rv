import { eq } from "drizzle-orm";
import { Request, Response } from "express";
import { db } from "../db/index";
import { productsTable } from "../db/schema";

export async function listProducts(req:Request, res:Response){
    try{
        const products = await db.select().from(productsTable);
        res.json(products);

    }catch(e){
        res.status(500).send(e);
    }
    // res.send("cL");
}
export async function getProductsById(req:Request, res:Response){
    try{
        const { id } = req.params;
        const product  =  await db.select().from(productsTable).where(eq(productsTable.id, Number(id)));

        if(!product){
            res.status(404).send({message: "out Prod"});
        }else{
            res.json(product);
        }
    }catch(e){
        res.status(500).send(e);
    }
    // res.send("aL");
}
export async function createProducts(req:Request, res:Response){
    // console.log(req.body);
    try{
      const [product] = await db.insert(productsTable).values(req.body).returning();
      res.status(201).json(product); 
    }catch(e){
        res.status(500).send(e);
    }
    


    // res.send("dPpX");
}
export async function updateProducts(req:Request, res:Response){
    try{
        const id = Number(req.params.id);
        const updFields = req.body;
        const [updProd] = await db.update(productsTable).set(updFields).where(eq(productsTable.id, id)).returning();

        if(updProd){
            res.json(updProd);
        }else{
            res.status(404).send({message: "None Product"});
        }
    }catch(e){
        res.status(500).send(e);
    }
    // res.send("upD");
}

export async function deleteProducts(req:Request, res:Response){
    try{
        const id = Number(req.params.id);
        const [deletdProd] = await db.delete(productsTable).where(eq(productsTable.id, id)).returning();
        if(deletdProd){
            res.status(204).send();
        }else{
            res.send(404).send({message: "None"});
        }
    }catch(e){
        res.status(500).send(e);
    }
    // res.send("dP");
}