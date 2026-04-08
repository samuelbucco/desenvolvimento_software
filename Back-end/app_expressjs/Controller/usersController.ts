import { Request, Response } from "express";

function users (req: Request, res: Response, next: any) {
    res.render('users');
}

export default { users };