import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response) => {

    let usuarios = await User.find({
        age: { $gt: 19 }
    }).sort({ "first.name": 1, "lastName:": 1 });
    console.log("Usuários: ", usuarios);

    res.render('pages/home', {
        name: 'Guilherme',
        lastName: 'Uberti',
    });
};

/*
    gt = Greater Then = Maior que
    gte = Greater Tren  or Equal = Maior ou igual que
    lt = Lower Then = menor que
    lte = Lower Then or Equal = Menor que ou igual 
*/