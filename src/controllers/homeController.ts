import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response) => {

    let usuarios = await User.find({});
    console.log("Usuários: ", usuarios);

    res.render('pages/home', {
        name: 'Guilherme',
        lastName: 'Uberti',
    });
};