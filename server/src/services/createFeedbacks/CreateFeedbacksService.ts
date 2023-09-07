import { NodemailerType } from "../nodemailer/nodemailerType";
import { firebase } from "../../database/db";

interface ICreateFeedbacksServiceRequest {
  type: string;
  comment: string;
  screenshot?: string
}

export class CreateFeedbacksService {
  constructor(
     private mailAdapter: NodemailerType
  ) {}
  async execute({type, comment, screenshot}:ICreateFeedbacksServiceRequest) {
    //  Se lanza error si nuestras variables vienen sin valores
    if (!type) {
      throw new Error("Type is required.");
    }

    if (!comment) {
      throw new Error("Comment is required.");
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error("Invalid screenshot format.");
    }

    // Establecemos dos constantes, una que sera pasada a la base de datos para que tome resuelva la fecha en la base de datos
    //  y la otra una que nos traiga la fecha para pasarla al email. difieren por pocos segundos
    //  realizado de esta manera ya que no logre ni con una llamada asincrona que se resolviera timestamp para luego pasarlo
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const current_timestamp = firebase.firestore.Timestamp.now().toDate()

    //  Esta es la linea que envia a firestore nuestro feedback
    await firebase.firestore().collection('feedback').add({
      type: type,
      comment: comment,
      screenshot: screenshot,
      createdAt : timestamp
    });

    //  Esta es la linea que envia el email de feedback
    await this.mailAdapter.sendMail({
      subject: "Nuevo feedback 😏",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `<p>Fecha: ${current_timestamp}</p>`,
        screenshot ? `<img src="${screenshot}" border="1" style="max-width:100%;width:auto;height:auto;"/>` : '',
        `</div>`,
      ].join('\n')
    })
  }
}