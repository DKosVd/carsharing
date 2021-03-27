import { Sequelize } from 'sequelize';
const { Model, DataTypes } = Sequelize;
import { sequelize } from '../core/db.js';
import { Auto } from './auto.js';

class TypeAuto extends Model { }


TypeAuto.init({
    id_type: {
        type: DataTypes.INTEGER(1),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    name_type: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
},
{sequelize, modelName: 'type_of_auto'}
)



export {TypeAuto}