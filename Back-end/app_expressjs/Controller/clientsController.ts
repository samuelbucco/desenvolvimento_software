import { Request, Response } from "express";

function index (req: Request, res: Response, next: any) {
    res.render('index');
}

function orders (req: Request, res: Response, next: any) {
    res.render('orders');
}

function users (req: Request, res: Response, next: any) {
    res.render('users');
}

function products (req: Request, res: Response, next: any) {
    res.render('products');
}

export default {index, orders, users, products};
