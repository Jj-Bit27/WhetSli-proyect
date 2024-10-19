export const getUsers = async (req, res) => {
  try {
    res.status(200).json({
      message: 'Apartado de obtener todos los usuarios'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getUser = async (req, res) => {
  try {
    res.status(200).json({
      message: 'Apartado de obtener un solo usuario'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createUser = async (req, res) => {
  try {
    res.status(200).json({
      message: 'Apartado de crear un nuevo usuario'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteUser = async (req, res) => {
  try {
    res.status(200).json({
      message: 'Apartado de eliminar un usuario'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const editUser = async (req, res) => {
  try {
    res.status(200).json({
      message: 'Apartado de editar los datos de un usuario'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}