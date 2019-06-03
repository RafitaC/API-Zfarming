import Sequelize from 'sequelize';
import {sequelize} from '../database/database';


const ContadorA = sequelize.define('contadoralertas',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    contador :{
        type: Sequelize.INTEGER
    },
    actuadoresid:{
        type: Sequelize.INTEGER
    },
    idcultivo:{
        type: Sequelize.INTEGER
    },
    registroid:{
        type: Sequelize.INTEGER
    }
});

export default ContadorA; 