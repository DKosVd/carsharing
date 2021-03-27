import { Sequelize } from 'sequelize';
const { Model, DataTypes } = Sequelize;
import { sequelize } from '../core/db.js';

class Drive extends Model { }


Drive.init({
    id_drive: {
        type: DataTypes.INTEGER(1),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    name_drive: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
},
{sequelize, modelName: 'drive'}
)



export {Drive}