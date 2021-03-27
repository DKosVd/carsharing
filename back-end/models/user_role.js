import { Sequelize } from 'sequelize';
const { Model, DataTypes } = Sequelize;
import { sequelize } from '../core/db.js';

class Role extends Model { }

Role.init({
    id_role: {
        type: DataTypes.INTEGER(1),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    type: {
        type: DataTypes.STRING(5),
        allowNull: false
    },
},
    { sequelize, modelName: 'role' },
)




export { Role }