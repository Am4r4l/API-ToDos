import { Router } from 'express';

import authMiddleware from './middlewares/auth';

import UserController from './controllers/UserController';
import ToDoController from './controllers/ToDoController';
import SessionController from './controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/to-dos', ToDoController.store);
routes.get('/to-dos', ToDoController.index);
routes.put('/to-dos/:todo_id', ToDoController.update);
routes.delete('/to-dos/:todo_id', ToDoController.delete);

export default routes;
