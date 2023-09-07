import { Request, Response } from "express";
import { NodemailerService } from "../nodemailer/nodemailerService";
import { CreateFeedbacksService } from "./CreateFeedbacksService";


export class CreateFeedbacksController {
  async handle(req: Request, res: Response): Promise<Response> {
    // se recibe la request y se extrae el body a nuestras variables
    const {type, comment, screenshot} = req.body;
    // se instancia una nueva clase nodemailer
    const nodemailerService = new NodemailerService();
    // se instancia una nueva clase de feedbacck service
    const createFeedbacksService = new CreateFeedbacksService(nodemailerService);
    //  se le pasa a nuestro metodo el contenido de nuestro body
    await createFeedbacksService.execute({type, comment,screenshot});
    return res.status(201).send();
  }
}