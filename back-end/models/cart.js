import { Sequelize } from 'sequelize';
const { Model, DataTypes } = Sequelize;
import { sequelize } from '../core/db.js';
import { Auto } from './auto.js';
import { User } from './user.js';


class Cart extends Model { }


Cart.init({
    id_user: {
        type: DataTypes.INTEGER(3),
        allowNull: false,
        references: {
            model: User,
            key: 'id_user'
        }
    }, 
    id_cart: {
        type: DataTypes.INTEGER(3),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    id_avto: {
        type: DataTypes.INTEGER(3),
        allowNull: false,
        references: {
            model: Auto,
            key: 'id_auto'
        }
    }, 
    order_date: {
        type: DataTypes.DATE,
        allowNull: false,
    }, 
    return_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    cost: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false
    },
    isConfirmed: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
    },
    isWait: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1
    },
    id_admin: {
        type: DataTypes.INTEGER(3),
        allowNull: false
    }
},
{sequelize, modelName: 'cart'}
)




export {Cart, User, Auto}