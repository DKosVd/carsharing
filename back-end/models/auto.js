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
    id_mark: {
        type: DataTypes.INTEGER(3),
        allowNull: false,
        references: {
            model: 'mark_auto',
            key: 'id_mark'
        }
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
    id_trans: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        references: {
            model: 'transmission',
            key: 'id_trans'
        }
    }, 
    id_drive: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        references: {
            model: 'drive',
            key: 'id_drive'
        }
    }, 
    id_rudder: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        references: {
            model: 'rudder',
            key: 'id_rudder'
        }
    }, 
    seats: {
        type: DataTypes.INTEGER(2),
        allowNull: false,
    }, 
    id_type: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        references: {
            model: 'type_auto',
            key: 'id_type'
        }
    }, 
    id_price: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        references: {
            model: 'price',
            key: 'id_price'
        }
    }, 
    src_img: {
        type: DataTypes.STRING(200),
        allowNull: true,
        defaultValue: null
    }
},
{sequelize, modelName: 'auto'}
)


export {Auto}