import mongoose from 'mongoose';

const contadorSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  valor: {
    type: Number,
    required: true,
    default: 0
  }
});

const Contador = mongoose.model('Contador', contadorSchema);

export default Contador;