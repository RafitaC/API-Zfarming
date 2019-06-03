import Sequelize, { TIME } from 'sequelize';
import {sequelize} from  '../database/database';
import ContadorA from './contadoralerta';

const Regsensor = sequelize.define('registrosensors',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    valor:{
        type: Sequelize.FLOAT
    },
    fecha:{
        type: Sequelize.DATE
    },
    hora:{
        type: Sequelize.TIME
    },
    cultivoid:{
        type: Sequelize.INTEGER
    },
    sensorid:{
        type: Sequelize.INTEGER
    }

}, {
    timestamps : false
});
Regsensor.hasMany(ContadorA,{foreingKey:'registroid', sourceKey: 'id'});
ContadorA.belongsTo(Regsensor,{foreingKey: 'registroid', sourceKey: 'id'});
export default Regsensor;