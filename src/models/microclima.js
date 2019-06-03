import Sequelize from 'sequelize';
import {sequelize} from '../database/database';
import Planta from './planta';

const Microclima = sequelize.define('microclima', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    tempmin: {
        type: Sequelize.FLOAT
    },
    tempmax: {
        type: Sequelize.FLOAT

    },
    humrelmin: {
        type: Sequelize.FLOAT

    },
    humrelmax: {
        type: Sequelize.FLOAT

    },
    phideal: {
        type: Sequelize.FLOAT

    },
    fotoPeriodo:{
        type: Sequelize.INTEGER
    }
}, {
        timestamps: false
    });
    Microclima.hasMany(Planta,{foreingKey: 'microclimaid', sourceKey:'id'});
    Planta.belongsTo(Microclima,{foreingKey:'microclimaid', sourceKey:'id'});
    export default Microclima;