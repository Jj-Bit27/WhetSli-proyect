export const getComments = async (req, res) => {
  try {
    res.status(200).json({
      message: 'Apartado de obtener todos los comentarios'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getComment = async (req, res) => {
  try {
    res.status(200).json({
      message: 'Apartado de obtener solo un comentario'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createComment = async (req, res) => {
  try {
    res.status(200).json({
      message: 'Apartado de crear un comentario'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteComment = async (req, res) => {
  try {
    res.status(200).json({
      message: 'Apartado de eliminar un comentario'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const editComment = async (req, res) => {
  try {
    res.status(200).json({
      message: 'Apartado de editar los datos de un comentario'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
} 