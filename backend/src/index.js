/* Importamos bibliotecas */
import express from "express";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import cors from "cors";

/* Base de datos */
import { connectDB } from "./db/connectDB.js";

/* Rutas */
import postsRouter from './routes/post.routes.js'
import usersRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'
import commentRouter from './routes/comment.routes.js'

dotenv.config()

const server = express() // Inicializamos el servidor
const port = process.env.PORT || 5000 // Puerto

/* Usamos cookies y hacemos que sea json la respuesta y que pueda acceder el frontend al backend */
server.use(cors({ origin: "http://localhost:3000", credentials: true }));
server.use(express.json())
server.use(cookieParser())

/* Rutas */
server.use('/api/auth', authRouter)
server.use('/api/posts', postsRouter)
server.use('/api/users', usersRouter)
server.use('/api/comments', commentRouter)

/* Otras rutas que no sean las antes dichas */
server.use('*', (req, res) => {
  res.send('Hello World!')
})

/* Escuchamos el servidor */
server.listen(port, () => {
  connectDB();
  console.log("Server is running on http://localhost:" + port);
});