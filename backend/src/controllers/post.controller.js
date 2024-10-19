export const getPosts = async (req, res) => {
  try {
    res.status(200).json({
      message: 'Apartado de obtener todas las publicaciones'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getPost = async (req, res) => {
  try {
    res.status(200).json({
      message: 'Apartado de obtener solo una publicacion'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createPost = async (req, res) => {
  try {
    res.status(200).json({
      message: 'Apartado de crear una publicacion'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deletePost = async (req, res) => {
  try {
    res.status(200).json({
      message: 'Apartado de eliminar una publicacion'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const editPost = async (req, res) => {
  try {
    res.status(200).json({
      message: 'Apartado de editar los datos de una publicacion'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
} 