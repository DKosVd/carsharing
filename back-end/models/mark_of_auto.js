import { Sequelize } from 'sequelize';
const { Model, DataTypes } = Sequelize;
import { sequelize } from '../core/db.js';
import { Auto } from './auto.js';

class MarkAuto extends Model { }


MarkAuto.init({
    id_mark: {
        type: DataTypes.INTEGER(3),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    name_mark: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
},
{sequelize, modelName: 'mark_of_auto'}
)



export {MarkAuto}