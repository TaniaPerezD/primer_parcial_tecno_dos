import Producto from '../model/modelProduct.js';
import Contador from '../model/modelContador.js';

export const crearProducto = async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    
    let contador = await Contador.findOne({ nombre: 'totalProductos' });
    if (!contador) {
      contador = await Contador.create({
        nombre: 'totalProductos',
        valor: 1
      });
    } else {
      contador.valor += 1;
      await contador.save();
    }
    
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

export const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find({});
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

export const actualizarProducto = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    
    const productoActualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    
    res.status(200).json(productoActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

export const eliminarProducto = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    
    await producto.deleteOne();
    
    let contador = await Contador.findOne({ nombre: 'totalProductos' });
    if (contador) {
      contador.valor -= 1;
      await contador.save();
    }
    
    res.status(200).json({ id: req.params.id });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};