import { Router } from "express";

const router = Router();

router.get('/', (req, res)=>{
    res.send("cL");
});

router.get('/:id', (req, res)=>{
    console.log(req.headers);
    console.log(req.params);
    res.send("aL");
});

router.post('/', (req, res)=>{
    res.send("Do st");
});

export default router;