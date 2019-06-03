import Sequelize from 'sequelize';
import {sequelize} from '../database/database';
import ContadorA from './contadoralerta';

const Actuador = sequelize.Define('actuadores',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre :{
        type: Sequelize.STRING
    }
});
Actuador.hasMany(ContadorA,{foreingKey:'actuadoresid', sourceKey: 'id'});
ContadorA.belongsTo(Actuador,{foreingKey: 'actuadoresid', sourceKey: 'id'});
export default Actuador;