import {Sequelize} from 'sequelize'
import { Cart } from '../models/cart.js';
import { Auto, Type_of_insurance } from '../models/index.js';
import { User } from '../models/index.js';
import { Insurance } from '../models/insurance.js'
const {Op} = Sequelize;

class OrderController {

    async allOrder(_, res) {
        try {
            const ordersByAllow = await Cart.findAll({
                where: { [Op.and]: [{isConfirmed: true, isWait: false}]}
            })
            const ordersByNotAllow = await Cart.findAll({
                where: { [Op.and]: [{isConfirmed: false, isWait: false}]}
            })
            const ordersWait = await Cart.findAll({
                where: { isWait: true}
            })
            if(ordersByAllow || ordersByNotAllow || ordersWait) {
                res.status(200).json({
                    status: 'success', 
                    data: {
                        allow: ordersByAllow,
                        wait: ordersWait,
                        notAllow: ordersByNotAllow
                    }
                })
                return;
            }
            res.status(404).send();
            return;
        } catch(err) {
            res.status(500).send();
        }
    } 

    async orderById(req, res) {
        try {
            const { id } = req.params;
            const order = await Cart.findOne({
                include: [{ model: User, attributes: ['nickname', 'email', 'first_name', 'sur_name']}, {model: Type_of_insurance, through: {attributes: []}},  {model: Auto, attributes: ['model', 'img']} ],
                where: {
                    id_cart: id
                },
            })
            const manager = await User.findOne({
                where: {
                    id_user: order.id_admin,
                },
                attributes: ['nickname', 'email', 'first_name', 'sur_name']
            })
            if(order) {
                res.status(200).json({
                    status: 'success', 
                    data: {
                        order,
                        manager:JSON.parse(JSON.stringify(manager))    
                    }
                })
                return
            }
            res.status(404).send();
            return;
        } catch(err) {
            res.status(500).send()
        }
    }

    async orderProccess(req, res) {
        try {
            const { isConfirmed, id_order } = req.body
            const orderProccess = await Cart.update({isConfirmed, isWait: false, id_admin: req.user.id_user}, { where: {id_cart: id_order}})
            if(orderProccess[0]) {
                res.status(204).json({
                    status: 'success'
                })
                return
            }
            res.status(404).send();
            return;
        } catch(err) {
            res.status(500).send();
        }
    }

    async addOrder(req, res) {
        try {
            const data = req.body;
            const { id_user } = req.user;
            const order = await Cart.create({
                id_user: data.user.id_user,
                id_avto: data.auto.id_auto,
                order_date: data.order_date,
                return_date: data.return_date,
                cost: data.cost,
                isConfirmed: data.status_order,
                id_admin: id_user,
                isWait: false
            })
            const insurance = await Insurance.create({
                id_type_insurance: data.type_of_insurance,
                id_cart: JSON.parse(JSON.stringify(order)).id_cart
            })
            res.status(201).send()
        } catch(err) {
            res.status(500).send(err)
        }
    }

}

export const OrderCtrl = new OrderController();