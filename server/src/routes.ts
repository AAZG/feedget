import { Router } from 'express';
import { CreateFeedbacksController } from './services/createFeedbacks/CreateFeedbacksController';

export const routes = Router();

// se instancia nuestro servicio/clase de crear feedback
const createFeedbacksController = new CreateFeedbacksController();
//  se le pasa los json que se reciban por metodo post y se le pasa a nuestro metodo
routes.post('/feedbacks/api', createFeedbacksController.handle);