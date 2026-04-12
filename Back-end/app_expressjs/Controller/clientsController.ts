import { Request, Response } from "express";
import { IClients } from "../Model/clients";
import clientsModel from "../Model/clientsModel";
import { Op } from "sequelize";


async function index (req: Request, res: Response, next: any) {
    const { search } = req.query;

    let where = {};

    if (search) {
        where = {
            [Op.or]: [
                { nome: { [Op.iLike]: `%${search}%` } },
                { email: { [Op.iLike]: `%${search}%` } }
            ]
        };
    }

    const clients = await clientsModel.findAll({ where });

    res.render('clients/index', { clients });
}

async function show (req: Request, res: Response, next: any) {
    const client = await clientsModel.findByPk(req.params.id as string);
    res.json(client);
}

async function edit (req: Request, res: Response, next: any) {
    const client = await clientsModel.findByPk(req.params.id as string);
    res.render('clients/edit', { client: client });
}

async function update (req: Request, res: Response, next: any) {
    await clientsModel.update(
        req.body as IClients, {
            where: {
                id: req.params.id
            }
        }       
    );
    res.redirect('/clients');
}

async function del (req: Request, res: Response, next: any) {
    await clientsModel.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/clients');
}

function create(req: Request, res: Response, next: any) {
    res.render('clients/create');    
}

async function store (req: Request, res: Response, next: any) {
  try {
    console.log('DADOS DO FORMULÁRIO:', req.body);

    const clients = req.body as IClients;

    await clientsModel.create({ ...clients });

    res.redirect('/clients');
    
  } catch (error) {
    console.error(error);
    next(error);
  }
}

export default {index, show, create, store, edit, update, del};
