import dotenv from 'dotenv';
dotenv.config();
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
app.get('/auto/search', carCtrl.search)
app.post('/auto', autoValidation, carCtrl.addAuto)
app.get('/auto/:id', carCtrl.getAuto);
app.get('/auto/:model', carCtrl.getAutoOfModel)
app.delete('/auto/:id', passport.authenticate('admin'), carCtrl.deleteAuto)



app.get('/user', UserCtrl.getUsers)
app.get('/user/search', UserCtrl.search)
app.get('/user/verify', UserCtrl.verifyUser)
app.get('/user/me', passport.authenticate('admin'), UserCtrl.getUserInfo)
app.get('/user/:id', UserCtrl.getUser)
app.post('/user', registerValidation, UserCtrl.createUser)
app.patch('/user/:id/edit', passport.authenticate('admin'), UserCtrl.updateUser)
app.delete('/user/:id', passport.authenticate('admin'), UserCtrl.deleteUser)


app.get('/orders', OrderCtrl.allOrder);
app.post('/orders', passport.authenticate('admin'), OrderCtrl.addOrder)
app.get('/orders/:id', OrderCtrl.orderById);
app.patch('/orders/:id/proccess', passport.authenticate('admin'), OrderCtrl.orderProccess)


app.post('/user/login', passport.authenticate('user-role'), UserCtrl.afterLogin)
app.post('/admin', passport.authenticate('admin-role'), UserCtrl.afterLogin)

app.listen(process.env.LOCAL_PORT, () => {
    console.log('Server run on port: '+ process.env.LOCAL_PORT) 
})