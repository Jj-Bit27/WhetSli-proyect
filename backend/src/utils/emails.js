/* Importamos la librería Resend y dotenv */
import { Resend } from 'resend'
import dotenv from 'dotenv'

/* Importamos las plantillas de los correos */
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";

dotenv.config()

const resend = new Resend(
  process.env.API_KEY_RESEND
)

/* Función para enviar el correo de verificación */
export const sendVerificationEmail = async (email, verificationToken) => {

  try {
    const { data, error } = await resend.emails.send({
      from: 'WhetSli <onboarding@resend.dev>',
      to: [email],
      subject: 'Verifica Tu Correo',
      react: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
    });

  } catch (error) {
    throw new Error(`Error al enviar el correo de verificacion: ${error}`);
  }
};

/* Función para enviar el correo de bienvenida */
export const sendWelcomeEmail = async (email, name) => {

  try {
    const { data, error } = await resend.emails.send({
      from: 'WhetSli <onboarding@resend.dev>',
      to: [email],
      subject: 'Bienvenido a WhetSli',
      html: "<h1>Bienvenido a WhetSli</h1>",
    });

  } catch (error) {
    throw new Error(`Error al enviar el correo de bienvenida: ${error}`);
  }
};

/* Función para enviar el correo de restablecimiento de contraseña */
export const sendPasswordResetEmail = async (email, resetURL) => {

  try {
    const { data, error } = await resend.emails.send({
      from: 'WhetSli <onboarding@resend.dev>',
      to: [email],
      subject: 'Restablece Tu Contraseña',
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
    });
  } catch (error) {
    throw new Error(`Error al enviar el correo de restablecimiento de contraseña: ${error}`);
  }
};

/* Función para enviar el correo de restablecimiento exitoso de contraseña */
export const sendResetSuccessEmail = async (email) => {

  try {
    const { data, error } = await resend.emails.send({
      from: 'WhetSli <onboarding@resend.dev>',
      to: [email],
      subject: 'Contraseña Restablecida Exitosamente',
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });

  } catch (error) {
    throw new Error(`Error al enviar el correo de restablecimiento exitoso de contraseña: ${error}`);
  }
};