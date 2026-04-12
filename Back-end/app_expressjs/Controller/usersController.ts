import { Request, Response } from "express";
import { IUsers } from "../Model/users";
import usersModel from "../Model/usersModel";

function login (req: Request, res: Response, next: any) {
    res.render('users/login');
}

async function checkLogin (req: Request, res: Response, next: any) {
    const { user, password }: IUsers = req.body;

    try {
        const userFound = await usersModel.findOne({ where: { user, password } });

        if (userFound) {
            res.redirect('/clients');
        } else {
            throw new Error('Usuário ou senha incorretos');
        }
    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
}

export default { login, checkLogin };