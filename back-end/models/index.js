import { Auto } from "./auto.js";
import { Cart } from "./cart.js";
import { Drive } from "./drive.js";
import { MarkAuto } from "./mark_of_auto.js";
import { Price } from "./price.js";
import { Rudder } from "./rudder.js";
import { Transmission } from "./transmission.js";
import { User } from "./user.js";
import { Role } from "./user_role.js";
import { TypeAuto } from "./type_of_auto.js"


User.belongsToMany(Auto, { through: Cart, foreignKey: 'id_user'})
Auto.belongsToMany(User, { through: Cart, foreignKey: 'id_avto'})
User.hasMany(Cart, {onDelete: 'cascade', onUpdate: 'cascade',  foreignKey: 'id_user'} )
Cart.belongsTo(User, {foreignKey: 'id_user'})
Auto.hasMany(Cart, {onDelete: 'cascade', onUpdate: 'cascade',  foreignKey: 'id_avto'} )
Cart.belongsTo(Auto, {foreignKey: 'id_avto'})

Auto.belongsTo(Rudder, {foreignKey: 'id_rudder'})
Rudder.hasMany(Auto, {onDelete: 'cascade', onUpdate: 'cascade',  foreignKey: 'id_rudder'})

Auto.belongsTo(Transmission, {foreignKey: 'id_trans'})
Transmission.hasMany(Auto, {onDelete: 'cascade', foreignKey: 'id_trans'})

Auto.belongsTo(Price, {foreignKey: 'id_price'})
Price.hasMany(Auto, {onDelete: 'cascade', onUpdate: 'cascade', foreignKey: 'id_price'})

Auto.belongsTo(Drive, {foreignKey: 'id_drive'})
Drive.hasMany(Auto, {onDelete: 'cascade', onUpdate: 'cascade', foreignKey: 'id_drive'})

Auto.belongsTo(MarkAuto, {foreignKey: 'id_mark'})
MarkAuto.hasMany(Auto, {onDelete: 'cascade', onUpdate: 'cascade', foreignKey: 'id_mark'})

Auto.belongsTo(TypeAuto, {foreignKey: 'id_type'})
TypeAuto.hasMany(Auto, {onDelete: 'cascade', onUpdate: 'cascade',  foreignKey: 'id_type'})

User.belongsTo(Role, {foreignKey: 'id_role'})
Role.hasMany(User, {onDelete: 'cascade', onUpdate: 'cascade', foreignKey: 'id_role'});

export {Auto, Cart, Drive, MarkAuto, Price, Rudder, Transmission, User, Role, TypeAuto}

