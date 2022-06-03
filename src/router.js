import Routes from 'express';
import multer from 'multer';

// Cadastro e autentificação de usuários.
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

// Upload de imagem do usuário.
import multerConfig from './config/multer';
import FileController from './app/controllers/FileController';

// Colaboradores
import CollaboratorController from './app/controllers/CollaboratorController'
import AppointmentController from './app/controllers/AppointmentController';

const routes = new Routes();
const upload = multer(multerConfig);

// -------------------- Usuários --------------------

// Requer nome, email e password do usuário, via POST.
routes.post('/users', UserController.store);

// Requer email e password
routes.post('/session', SessionController.store);


// Rotas as rotas a partir daqui devem ser autenticadas.
// Para todas elas é necessário que em auth esteja definido o token.
routes.use(authMiddleware)

// Requer name, email, olPassword, password, confirmPassword, via PUT.
routes.put('/users', UserController.update);
//routes.put('/users', authMiddleware, UserController.update);

// Upload de arquivos
routes.post('/files', upload.single('file'), FileController.store);

// ----------------- Colaboradores -----------------

// Lista de colaboradores.
// Requer que o usuário esteja logado.
routes.get('/collaborator', CollaboratorController.index);

// Listagem de agendamentos
// Requer que o usuário esteja logado.
routes.get('/appointments', AppointmentController.index);

// Rota de agendamento
// Requer collaborator_id e date.
routes.post('/appointments', AppointmentController.store);

export default routes;