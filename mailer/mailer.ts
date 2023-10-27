import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "franbalcarce21@gmail.com",
    pass: "ypzb xvlj zkgw lclz",
  },
  from: "franbalcarce21@gmail.com",
});

export const sendEmail = async (to: string, code: string): Promise<void> => {
  const mailOptions = {
    from: '"Nucbazappi" franbalcarce21@gmail.com',
    to,
    subject: "Codigo de verificacion para Nucbazappi",
    text: `Llego tu codigo para Nucbazappi.
    El codigo es ${code}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Correo electronico enviado");
  } catch (error) {
    console.log("Error al enviar el correo electronico");
  }
};
