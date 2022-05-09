import { Request, Response } from 'express';
import User from '../models/User';

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
};

export const newUserAction = async (req: Request, res: Response) => {
    await new User({
        name: {
            firstName: req.body.firstName as string,
            lastName: req.body.lastName as string
        },
        email: req.body.email as string,
        age: req.body.age as number,
        interests: (req.body.interests).split(', ,')
    }).save((err, data) => {
        if (err) return console.error("Erro ao cadastrar usuário: ", err.message);
        console.log(data, "Usuário inserido com sucesso!");
    });
    res.redirect('/');
}

export const incrementAge = async (req: Request, res: Response) => {
    let user = await User.findOne({ _id: req.params.id })
    if (user) {
        user.age += 1;
        await user.save();
    }
    res.redirect('/');
}

export const discreaseAge = async (req: Request, res: Response) => {
    let user = await User.findOne({ _id: req.params.id })
    if(user){
        user.age -= 1;
        await user.save();
    }
    res.redirect('/');
}

export const removeUser = async (req: Request, res: Response) => {
    await User.deleteOne({ _id: req.params.id })
    res.redirect('/');
}
