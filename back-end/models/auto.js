import { Sequelize } from 'sequelize';
const { Model, DataTypes } = Sequelize;
import { sequelize } from '../core/db.js';


class Auto extends Model { }


Auto.init({
    id_auto: {
        type: DataTypes.INTEGER(3),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    is_present: {
        type: DataTypes.BOOLEAN, 
        allowNull: true,
        defaultValue: 0
    }, 
    model: {
        type: DataTypes.STRING(15),
        allowNull: false,
    }, 
    seats: {
        type: DataTypes.INTEGER(2),
        allowNull: false,
    }, 
    img: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    vin: {
        type: DataTypes.STRING(17),
        allowNull: false,
    },
    number: {
        type: DataTypes.STRING(8),
        allowNull: false
    }
},
{sequelize, modelName: 'auto'}
)


export {Auto}