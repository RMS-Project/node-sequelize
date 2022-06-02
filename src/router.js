import Routes from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth'

const routes = new Routes();

// Requer nome, email e password do usuário, via POST.
routes.post('/users', UserController.store);

// Requer email e password
routes.post('/session', SessionController.store);


// Rotas as rotas apartir daqui devem ser autenticadas.
routes.use(authMiddleware)

// Requer name, email, olPassword, password, confirmPassword, via PUT.
routes.put('/users', UserController.update);
//routes.put('/users', authMiddleware, UserController.update);

export default routes;