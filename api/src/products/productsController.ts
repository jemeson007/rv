import { Request, Response } from "express";

export function listProducts(req:Request, res:Response){
    res.send("cL");
}
export function getProductsById(req:Request, res:Response){
    res.send("aL");
}
export function updateProducts(req:Request, res:Response){
    res.send("upD");
}
export function createProducts(req:Request, res:Response){
    res.send("dPpX");
}
export function deleteProducts(req:Request, res:Response){
    res.send("dP");
}