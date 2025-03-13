import Contador from '../model/modelContador.js';
import Usuario from '../model/modelUser.js';
import Producto from '../model/modelProduct.js';

export const obtenerContadores = async (req, res) => {
  try {
    const totalUsuarios = await Usuario.countDocuments();
    const totalProductos = await Producto.countDocuments();

    await Contador.findOneAndUpdate(
      { nombre: 'totalUsuarios' },
      { valor: totalUsuarios },
      { upsert: true, new: true }
    );
    
    await Contador.findOneAndUpdate(
      { nombre: 'totalProductos' },
      { valor: totalProductos },
      { upsert: true, new: true }
    );
    
    res.status(200).json({
      totalUsuarios,
      totalProductos
    });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

export const obtenerOperaciones = async (req, res) => {
  try {
    const contador = await Contador.findOne({ nombre: 'operacionesTotales' });
    
    const totalOperaciones = contador ? contador.valor : 0;
    
    res.status(200).json({
      totalOperaciones
    });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};