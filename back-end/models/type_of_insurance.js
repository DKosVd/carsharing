import { Sequelize } from 'sequelize';
const { Model, DataTypes } = Sequelize;
import { sequelize } from '../core/db.js';

class Type_of_insurance extends Model { }


Type_of_insurance .init({
    id_type_insurance: {
        type: DataTypes.INTEGER(1),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING(5),
        allowNull: false
    },
},
{sequelize, modelName: 'type_of_insurance'}
)



export {Type_of_insurance }