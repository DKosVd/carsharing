import { Sequelize } from 'sequelize';
const { Model, DataTypes } = Sequelize;
import { sequelize } from '../core/db.js';
import { Auto } from './auto.js';

class Transmission extends Model { }


Transmission.init({
    id_trans: {
        type: DataTypes.INTEGER(1),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    name_trans: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
},
{sequelize, modelName: 'transmission'}
)


export {Transmission}