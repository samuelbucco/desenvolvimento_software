import { Request, Response } from "express";

function products (req: Request, res: Response, next: any) {
    res.render('products');
}

export default { products };