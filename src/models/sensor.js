import Sequelize from 'sequelize';
import {sequelize} from '../database/database';
import Regsensor from './registrodatossensor';


const Sensor = sequelize.define('sensor', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    sensor:{
        type: Sequelize.STRING
    }
}, {
    timestamps : false
});
Sensor.hasMany(Regsensor, { foreingKey: 'sensorid', sourceKey: 'id' });
Regsensor.belongsTo(Sensor, { foreingKey: 'sensorid', sourceKey: 'id' });
export default Sensor;