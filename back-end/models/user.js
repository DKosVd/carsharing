import { Sequelize } from 'sequelize';
const { Model, DataTypes } = Sequelize;
import { sequelize } from '../core/db.js';


class User extends Model { }


User.init({
    id_user: {
        type: DataTypes.INTEGER(3),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    confirmed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    },
    confirmed_hash: {
        type: DataTypes.STRING(75),
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    sur_name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(75),
        allowNull: false
    },
    nickname: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    id_role: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: 1,
        references: {
            model: 'role',
            key: 'id_role'
        }
    }, 
    age: {
        type:DataTypes.DATE,
        allowNull: false
    },
    isBanned: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    }
},
{sequelize, modelName: 'user'}
)




export {User}