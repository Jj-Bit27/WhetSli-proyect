/* Importamos express */
import express from 'express'

/* Importamos los controladores */
import { getUsers, getUser, createUser, deleteUser, editUser } from '../controllers/users.controller.js'

const router = express.Router()

router.get('/', getUsers) // localhost:2000/api/users -> obtener usuarios

router.get('/:id', getUser) // localhost:2000/api/users/1 -> obtener un usuario por id

router.post('/create', createUser) // localhost:2000/api/users/create -> crear un usuario

router.delete('/delete/:id', deleteUser) // localhost:2000/api/users/delete/1 -> eliminar un usuario por id

router.put('/edit/:id', editUser) // localhost:2000/api/users/edit/1 -> editar un usuario por id

export default router