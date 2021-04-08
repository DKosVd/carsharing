import { Sequelize } from 'sequelize';
const { Model, DataTypes } = Sequelize;
import { sequelize } from '../core/db.js';


class Characteristics extends Model { }


Characteristics.init({
    id_characteristics: {
        type: DataTypes.INTEGER(3),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    id_mark: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        references: {
            model: 'mark_of_auto',
            key: 'id_mark'
        }
    },
    id_type: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        references: {
            model: 'type_of_auto',
            key: 'id_type'
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
    id_auto: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        references: {
            model: 'auto',
            key: 'id_auto'
        }
    },
},
{sequelize, modelName: 'characteristics'}
)


export {Characteristics}