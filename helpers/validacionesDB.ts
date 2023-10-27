import { sendEmail } from "../mailer/mailer";
import Usuario, { IUser } from "../models/usuario";

export const existeEmail = async (email: string): Promise<void> => {
  const existeEmail: IUser | null = await Usuario.findOne({ email });

  if (existeEmail && existeEmail.verified) {
    throw new Error(`El correo ${email} ya esta registrado`);
  }

  if (existeEmail && existeEmail.verified) {
    await sendEmail(email, existeEmail.code as string);
    throw new Error(
      `El correo ${email} ya esta registrado. Se envio nuevamente el codigo de verificacion a ${email}`
    );
  }
};
