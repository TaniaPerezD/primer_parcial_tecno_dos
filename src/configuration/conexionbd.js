import mongoose from 'mongoose';

const conexion = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/parcial_crud', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.log('Error al conectar a la base de datos');
    }
};

conexion();

export default conexion;
