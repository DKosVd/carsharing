import { Sequelize } from 'sequelize';
const { Model, DataTypes } = Sequelize;
import { sequelize } from '../core/db.js';

class Insurance extends Model { }


Insurance.init({
    id_insurance: {
        type: DataTypes.INTEGER(1),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    id_type_insurance: {
        type: DataTypes.INTEGER(1),
        allowNull: false
    },
    id_cart: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
    },
},
{sequelize, modelName: 'insurance'}
)



export {Insurance}