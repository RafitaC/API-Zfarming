import Sequelize from 'sequelize';
import {sequelize} from '../database/database';
import Cultivo from './cultivo';

const Planta = sequelize.define('plantas', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true
    },
    nombreComun:{
        type: Sequelize.STRING
    },
    
    nombreCientifico:{
        type: Sequelize.STRING
    },
    
    tiempoCosecha:{
        type: Sequelize.INTEGER
    },
    microclimaId:{
        type: Sequelize.INTEGER
    }
}, {
    timestamps : false
});
Planta.hasMany(Cultivo,{foreingKey : 'plantaid', sourceKey: 'id'});
Cultivo.belongsTo(Planta,{foreingKey: 'plantaid', sourceKey: 'id'});
export default Planta;