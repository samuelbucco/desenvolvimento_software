import { Request, Response } from "express";
import { IClients } from "../Model/clients";
import clientsModel from "../Model/clientsModel";

async function index (req: Request, res: Response, next: any) {
    // res.render('index');
    const clients = await clientsModel.findAll();
    res.json(clients);
}

async function show (req: Request, res: Response, next: any) {
    const client = await clientsModel.findByPk(req.params.id as string);
    res.json(client);
}

async function edit (req: Request, res: Response, next: any) {
    const client = await clientsModel.findByPk(req.params.id as string);
    res.render('edit', { client: client });
}

async function update (req: Request, res: Response, next: any) {
    await clientsModel.update(
        req.body as IClients, {
            where: {
                id: req.params.id
            }
        }       
    );
    res.redirect('/');
}

async function del (req: Request, res: Response, next: any) {
    await clientsModel.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/');
}

function create(req: Request, res: Response, next: any) {
    res.render('create');    
}

async function store (req: Request, res: Response, next: any) {
  try {
    console.log('DADOS DO FORMULÁRIO:', req.body);

    const clients = req.body as IClients;

    await clientsModel.create({ ...clients });

    res.redirect('/');
    
  } catch (error) {
    console.error(error);
    next(error);
  }
}

export default {index, show, create, store, edit, update, del};
