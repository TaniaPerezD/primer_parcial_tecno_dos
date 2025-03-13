import Contador from '../model/modelContador.js';

export const contarOperacion = async (req, res, next) => {
  try {

    let contador = await Contador.findOne({ nombre: 'operacionesTotales' });
    
    if (!contador) {
      contador = await Contador.create({
        nombre: 'operacionesTotales',
        valor: 0
      });
    }
  
    contador.valor += 1;
    await contador.save();
    
    next();
  } catch (error) {
    console.error('Error al contar operación:', error);
    next();
  }
};