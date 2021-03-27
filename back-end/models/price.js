import { Sequelize } from 'sequelize';
const { Model, DataTypes } = Sequelize;
import { sequelize } from '../core/db.js';
import { Auto } from './auto.js';

class Price extends Model { }


Price.init({
    id_price: {
        type: DataTypes.INTEGER(1),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    per_hour: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false,
    },
    per_day: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false
    }
},
{sequelize, modelName: 'price'}
)




export {Price}