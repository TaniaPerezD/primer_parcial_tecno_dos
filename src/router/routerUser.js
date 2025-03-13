import express from 'express';
import {
  crearUsuario,
  obtenerUsuarios,
  actualizarUsuario,
  eliminarUsuario
} from '../controller/controllerUser.js';

const router = express.Router();

router.route('/')
  .get(obtenerUsuarios)
  .post(crearUsuario);

router.route('/:id')
  .put(actualizarUsuario)
  .delete(eliminarUsuario);

export default router;