import express from 'express';
import {
  crearProducto,
  obtenerProductos,
  actualizarProducto,
  eliminarProducto
} from '../controller/controllerProduct.js';

const router = express.Router();

router.route('/')
  .get(obtenerProductos)
  .post(crearProducto);

router.route('/:id')
  .put(actualizarProducto)
  .delete(eliminarProducto);

export default router;