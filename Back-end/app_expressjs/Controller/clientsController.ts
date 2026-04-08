import { Request, Response } from "express";
import { IClients } from "../Model/clients";
import clientsModel from "../Model/clientsModel";

async function index (req: Request, res: Response, next: any) {
    // res.render('index');
    const clients = await clientsModel.findAll();
    res.json(clients);
}

function create(req: Request, res: Response, next: any) {
    res.render('create');    
}

async function store (req: Request, res: Response, next: any) {
    const clients = req.body as IClients;
    
    await clientsModel.create({...clients});

    res.redirect('/');
}


export default {index, create, store};
