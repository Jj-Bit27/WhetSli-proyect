/* Importamos el paquete express */
import express from 'express';

/* Importamos los controladores */
import {
  login,
  logout,
  signup,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth,
} from '../controllers/auth.controller.js';
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);

router.post('/login', login); // localhost:2000/api/auth/login -> iniciar sesion
router.post('/signup', signup); // localhost:2000/api/auth/signup -> registrar usuario
router.get('/logout', logout); // localhost:2000/api/auth/logout -> cerrar sesion

router.post("/verify-email", verifyEmail); // localhost:2000/api/auth/verify-email -> verificar email
router.post("/forgot-password", forgotPassword); // localhost:2000/api/auth/forgot-password -> olvidar contraseña

router.post("/reset-password/:token", resetPassword); // localhost:2000/api/auth/reset-password/:token -> restablecer contraseña

export default router;