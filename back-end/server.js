import dotenv from 'dotenv';
dotenv.config();
import {Sequelize} from 'sequelize'
import { Auto, MarkAuto, User } from './models/index.js'
import { Cart } from './models/index.js'
//TODO: Разобрать запрос(заказ + пользователь)
try {

    const a = await Cart.findAll({
        include: [{model: User,    
                // include: [[Sequelize.fn("COUNT", Sequelize.col("cart.order_date")), "countOrders"]]
          }, {model: Auto}],
        group : ['user.id_user'],
        where: {
            id_cart: '3' //id_user
        },
        attributes: {
            include: [ [Sequelize.fn("COUNT", Sequelize.col("cart.order_date")), "countOrders"], [Sequelize.fn("SUM", Sequelize.col("cart.cost")), "total"] ],
        },
    })
    // const b = await User.findAll({
    //     include: [{model: Role,  required: true}]
    // // })
    // console.log(JSON.stringify(b, null, 2))
} catch(err) {
    console.log(err.message)
}
import express from 'express';
import'./core/dbConnection.js'
import { carCtrl } from './controllers/carController.js';
import { UserCtrl } from './controllers/userController.js';
import { registerValidation } from './validation/userValidator.js';
import { autoValidation } from './validation/autoValidator.js';
import { passport } from './core/passport.js';
import { OrderCtrl } from './controllers/orderController.js';

const app = express();
app.use(express.json());
app.use(passport.initialize());

app.get('/auto', carCtrl.getAutos)
app.post('/auto', autoValidation, carCtrl.addAuto)
app.get('/auto/:id', carCtrl.getAuto);
app.get('/auto/:model', carCtrl.getAutoOfModel)
app.delete('/auto/:id', passport.authenticate('admin'), carCtrl.deleteAuto)



app.get('/user', UserCtrl.getUsers)
app.get('/user/verify', UserCtrl.verifyUser)
app.get('/user/me', passport.authenticate('admin'), UserCtrl.getUserInfo)
app.get('/user/:id', UserCtrl.getUser)
app.post('/user', registerValidation, UserCtrl.createUser)
app.patch('/user/:id/edit', passport.authenticate('admin'), UserCtrl.updateUser)
app.delete('/user/:id', passport.authenticate('admin'), UserCtrl.deleteUser)


app.get('/orders', OrderCtrl.allOrder);
app.get('/orders/:id', OrderCtrl.orderById);

app.post('/user/login', passport.authenticate('user-role'), UserCtrl.afterLogin)
app.post('/admin', passport.authenticate('admin-role'), UserCtrl.afterLogin)

app.listen(process.env.LOCAL_PORT, () => {
    console.log('Server run on port: '+ process.env.LOCAL_PORT) 
})