export interface SendMailDTO {
  subject: string;
  body: string;
}

export interface NodemailerType {
  sendMail: (data:SendMailDTO)=>Promise<void>;
}
