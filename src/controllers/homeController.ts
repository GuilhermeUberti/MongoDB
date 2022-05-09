import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response) => {   

    await User.updateMany(
        { email: 'gui@hotmail.com' },
        { age: 102 }
    )

    let users = await User.find({}).sort({ 'name.firstName': 1 });

    res.render('pages/home', {
        name: 'Guilherme',
        lastName: 'Uberti',
        users
    });
};

/*
let newUser = await User.create({
    name: { "firstName": 'Eliza', "lastName": 'Samudio' },
    email: "eliza@bol.com.br",
    age: 33,
    interests: [
        'basquete',
        'volei',
        'pastel'
    ]
});

console.log('Novo Usuário:', newUser);

let usuarios = await User.find({
    age: { $gt: 30 }
}).sort({ "first.name": 1, "lastName:": 1 })
.skip(1).limit(2);
console.log("Usuários: ", usuarios);
*/

/*
    gt = Greater Then = Maior que
    gte = Greater Tren  or Equal = Maior ou igual que
    lt = Lower Then = menor que
    lte = Lower Then or Equal = Menor que ou igual 
*/