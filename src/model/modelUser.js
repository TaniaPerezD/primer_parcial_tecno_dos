import mongoose from 'mongoose';

const usuarioSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;