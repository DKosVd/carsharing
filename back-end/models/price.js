import { Sequelize } from 'sequelize';
const { Model, DataTypes } = Sequelize;
import { sequelize } from '../core/db.js';

class Price extends Model { }


Price.init({
    id_price: {
        type: DataTypes.INTEGER(1),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    id_price_value: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false,
        references: {
            model: 'price_value',
            key: 'id_price_value'
        }
    },
    id_auto: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false,
        references: {
            model: 'auto',
            key: 'id_auto'
        }
    }
},
{sequelize, modelName: 'price'}
)

export {Price}