import express from 'express';
import cors from 'cors';
import connectDB from './configuration/conexionbd.js';
import { contarOperacion } from './middle/middleContador.js';
import usuarioRoutes from './router/routerUser.js';
import productoRoutes from './router/routerProduct.js';
import contadorRoutes from './router/routerContador.js';


const app = express();
app.use(cors());
app.use(express.json());

app.use(contarOperacion);

app.use('/api/usuarios', usuarioRoutes);

app.use('/api/productos', productoRoutes);
app.use('/api', contadorRoutes);

app.get('/', (req, res) => {
  res.json({
    mensaje: 'Api funcionando'
  });
});

app.use((req, res) => {
  res.status(404).json({
    mensaje: 'Ruta no encontrada'
  });
});

connectDB().then(() => {
  app.listen(3000, () => {
    console.log(`Servidor corriendo en puerto ${3000}`);
  });
}).catch(err => {
  console.error(`Error al iniciar servidor: ${err.message}`);
});

export default app;