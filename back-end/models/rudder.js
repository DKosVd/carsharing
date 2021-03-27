import { Sequelize } from 'sequelize';
const { Model, DataTypes } = Sequelize;
import { sequelize } from '../core/db.js';
import { Auto } from './auto.js';

class Rudder extends Model { }


Rudder.init({
    id_rudder: {
        type: DataTypes.INTEGER(1),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    name_rudder: {
        type: DataTypes.STRING(7),
        allowNull: false,
    },
},
{sequelize, modelName: 'rudder'}
)


export {Rudder}