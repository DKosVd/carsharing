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
import { Characteristics } from "./characteristics.js";
import { PriceValue } from "./price_value.js";
import { Type_of_insurance } from "./type_of_insurance.js";
import { Insurance } from "./insurance.js";


User.belongsToMany(Auto, { through: Cart, foreignKey: 'id_user'})
Auto.belongsToMany(User, { through: Cart, foreignKey: 'id_avto'})
User.hasMany(Cart, {onDelete: 'cascade', onUpdate: 'cascade',  foreignKey: 'id_user'} )
Cart.belongsTo(User, {foreignKey: 'id_user'})
Auto.hasMany(Cart, {onDelete: 'cascade', onUpdate: 'cascade',  foreignKey: 'id_avto'} )
Cart.belongsTo(Auto, {foreignKey: 'id_avto'})


Auto.belongsToMany(PriceValue, {through: Price, foreignKey: 'id_auto'})
PriceValue.belongsToMany(Auto, {through: Price, foreignKey: 'id_price_value'})

Cart.belongsToMany(Type_of_insurance, {through: Insurance, foreignKey: 'id_cart'})
Type_of_insurance.belongsToMany(Cart, {through: Insurance, foreignKey: 'id_type_insurance'})

Rudder.belongsToMany(Auto, {through: Characteristics, foreignKey: 'id_rudder'})
Auto.belongsToMany(Rudder, { through: Characteristics, foreignKey: 'id_auto'})


TypeAuto.belongsToMany(Auto, {through: Characteristics, foreignKey: 'id_type'})
Auto.belongsToMany(TypeAuto, { through: Characteristics, foreignKey: 'id_auto'})


Drive.belongsToMany(Auto, {through: Characteristics, foreignKey: 'id_drive'})
Auto.belongsToMany(Drive, { through: Characteristics, foreignKey: 'id_auto'})


MarkAuto.belongsToMany(Auto, {through: Characteristics, foreignKey: 'id_mark'})
Auto.belongsToMany(MarkAuto, { through: Characteristics, foreignKey: 'id_auto'})


Transmission.belongsToMany(Auto, {through: Characteristics, foreignKey: 'id_trans'})
Auto.belongsToMany(Transmission, { through: Characteristics, foreignKey: 'id_auto'})

User.belongsTo(Role, {foreignKey: 'id_role'})
Role.hasMany(User, {onDelete: 'cascade', onUpdate: 'cascade', foreignKey: 'id_role'});

export {Auto, Cart, Drive, MarkAuto, Price, Rudder, Transmission, User, Role, TypeAuto, Insurance, Type_of_insurance}

