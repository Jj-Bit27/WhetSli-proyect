/* Importamos express */
import express from 'express'

/* Importamos los controladores */
import { getComments, getComment, createComment, deleteComment, editComment } from '../controllers/comment.controller'

const router = express.Router()

router.get('/', getComments) // localhost:2000/api/comments -> obtener publicaciones

router.get('/:id', getComment) // localhost:2000/api/comments/1 -> obtener una publicacion por id

router.post('/create', createComment) // localhost:2000/api/comments/create -> crear una publicacion

router.delete('/delete/:id', deleteComment) // localhost:2000/api/comments/delete/1 -> eliminar una publicacion por id

router.put('/edit/:id', editComment) // localhost:2000/api/comments/edit/1 -> editar una publicacion por id

export default router