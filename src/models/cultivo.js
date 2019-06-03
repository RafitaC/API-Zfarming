import Sequelize from 'sequelize';
import {sequelize} from '../database/database';
import Regsensor from './registrodatossensor';
import  ContadorA from './contadoralerta';;

const Cultivo = sequelize.define('cultivo', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    fechainicio:{
        type: Sequelize.DATE

    },
    fechafin:{
        type: Sequelize.DATE
    },
    cantidadplantas:{
        type: Sequelize.INTEGER

    },
    plantaid:{
        type: Sequelize.INTEGER

    }
}, {
    timestamps : false
});

Cultivo.hasMany(Regsensor,{foreingKey: 'cultivoid', sourceKey: 'id'});
Regsensor.belongsTo(Cultivo,{foreingKey: 'cultivoid',sourceKey: 'id'});
Cultivo.hasMany(ContadorA,{foreingKey:'idcultivo', sourceKey: 'id'});
ContadorA.belongsTo(Cultivo,{foreingKey: 'idcultivo', sourceKey: 'id'});

export default Cultivo;