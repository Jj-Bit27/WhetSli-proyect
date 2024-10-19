export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verificacion De Correo</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Verify Your Email</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hola,</p>
    <p>Te agradecemos por registrarte! Tu codigo de verificacion es:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #4CAF50;">{verificationCode}</span>
    </div>
    <p>Ingresa este codigo en la pagina de verificacion para completar tu registro en la pagina.</p>
    <p>Este codigo expira en 15 minutos por razones de seguridad.</p>
    <p>Si no ha creado una cuenta con nosotros, ignore este correo electrónico.</p>
    <p>Un cordial saludo, <br>Equipo De La Aplicacion</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>Este es un mensaje automatico, por favor de no responder al correo.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Restablecimiento De Contraseña Exitoso</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Restablecimiento De Contraseña Exitoso</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hola,</p>
    <p>Le escribrimos para confirmarle que su contarseña se ha restablecido exitosamente.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>Si usted no ha requerido restablecer su contrasela, contacte al equipo de soporte lo mas rapido posible.</p>
    <p>Por razones de seguridad, le recomendamos lo siguiente:</p>
    <ul>
      <li>Use una unica y buena contraseña</li>
      <li>Habilite la autenticacion de dos pasos si se encuentra disponible</li>
      <li>Evite el uso de la misma contrasea en varias plataformas</li>
    </ul>
    <p>Gracias a ayudarnos por mentener tu cuenta segura.</p>
    <p>Un cordial saludo, <br>Equipo De La Aplicacion</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>Este es un mensaje automatico, por favor de no responder al correo.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Restablece tu Contraseña</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Restablece Tu Contraseña</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hola,</p>
    <p>Recibimos la solicitud de restablecer su contraseña, en caso de no a verla solicitado ignore el correo</p>
    <p>Para restablecer la contraseña, haga click en el boton de abajo:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Restablecer Contraseña</a>
    </div>
    <p>Este link expira en 1 hora por razones de seguridad.</p>
    <p>Un cordial saludo, <br>Equipo De La Aplicacion</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>Este es un mensaje automatico, por favor de no responder al correo.</p>
  </div>
</body>
</html>
`;