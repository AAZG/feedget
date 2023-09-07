import { NodemailerType, SendMailDTO } from "./nodemailerType";
import nodemailer from 'nodemailer';

//  Aqui realizamos la conexion a nuestro servicio de email
const transport = nodemailer.createTransport({
  // host: "smtp.mailtrap.io",
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS
  }
});

//  Aqui definimos quien envia y los destinatarios del email
export class NodemailerService implements NodemailerType {
 async sendMail({subject, body}: SendMailDTO) {
  await transport.sendMail({
    from: "AAZG <aazg24@gmail.com>",
    to: "Cuni Metal <atencionclientes@cunimetal.com>",
    subject,
    html: body
  })
  };
}