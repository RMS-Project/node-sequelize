import Routes from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';
import FileController from './app/controllers/FileController';

// Colaboradores
import CollaboratorController from './app/controllers/CollaboratorController'

const routes = new Routes();
const upload = multer(multerConfig);

// Requer nome, email e password do usuário, via POST.
routes.post('/users', UserController.store);

// Requer email e password
routes.post('/session', SessionController.store);


// Rotas as rotas apartir daqui devem ser autenticadas.
routes.use(authMiddleware)

// Requer name, email, olPassword, password, confirmPassword, via PUT.
routes.put('/users', UserController.update);
//routes.put('/users', authMiddleware, UserController.update);

// Upload de arquivos
routes.post('/files', upload.single('file'), FileController.store);


// Colaboradores

// Lista de colaboradores.
// Requer 
routes.get('collborator', CollaboratorController.index);

export default routes;