import express from 'express';
import {
  obtenerContadores,
  obtenerOperaciones
} from '../controller/controllerContador.js';

const router = express.Router();

router.get('/contadores', obtenerContadores);
router.get('/operaciones', obtenerOperaciones);

export default router;