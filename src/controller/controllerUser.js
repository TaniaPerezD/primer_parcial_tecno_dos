import Usuario from '../model/modelUser.js';
import Contador from '../model/modelContador.js';

export const crearUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    
    let contador = await Contador.findOne({ nombre: 'totalUsuarios' });
    if (!contador) {
      contador = await Contador.create({
        nombre: 'totalUsuarios',
        valor: 1
      });
    } else {
      contador.valor += 1;
      await contador.save();
    }
    
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};
export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find({});
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

export const actualizarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    
    res.status(200).json(usuarioActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};
export const eliminarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    
    await usuario.deleteOne();
    
    // Actualizar contador de usuarios
    let contador = await Contador.findOne({ nombre: 'totalUsuarios' });
    if (contador) {
      contador.valor -= 1;
      await contador.save();
    }
    
    res.status(200).json({ id: req.params.id });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};