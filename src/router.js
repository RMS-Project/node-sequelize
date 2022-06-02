import Routes from 'express';
import UserController from './app/controllers/SessionController';
import SessionController from './app/controllers/SessionController';

const routes = new Routes();

routes.post('/users', UserController.store);

routes.post('/session', SessionController.store);

routes.put('/user', UserController.update);

export default routes;