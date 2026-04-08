import { Request, Response } from "express";

function orders (req: Request, res: Response, next: any) {
    res.render('orders');
}

export default {orders};