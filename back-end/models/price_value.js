import { Sequelize } from 'sequelize';
const { Model, DataTypes } = Sequelize;
import { sequelize } from '../core/db.js';

class PriceValue extends Model { }


PriceValue.init({
    id_price_value: {
        type: DataTypes.INTEGER(3),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    per_hour: {
        type: DataTypes.DECIMAL(7, 2),
        allowNull: false,
    },
    per_day: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false
    }
},
{sequelize, modelName: 'price_value'}
)



export {PriceValue}