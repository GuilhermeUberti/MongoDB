import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';
import User from '../models/User';

const router = Router();

router.get('/', HomeController.home);

router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);

router.get('/nome', UserController.nome);

router.post('/novo-usuario', UserController.newUserAction);
router.get('/removeUser/:id', UserController.removeUser);
router.get('/incrementAge/:id', UserController.incrementAge);
router.get('/discreaseAge/:id', UserController.discreaseAge);

export default router;