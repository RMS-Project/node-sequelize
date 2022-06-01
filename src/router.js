import Routes from 'express';
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'


const routes = new Routes();

routes.post('/users', UserController);

routes.post('/session', SessionController.store);

export default routes;