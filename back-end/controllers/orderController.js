import { Cart } from '../models/cart.js';
import { Auto } from '../models/index.js';
import { User } from '../models/index.js';


class OrderController {

    async allOrder(_, res) {
        try {
            const ordersByAllow = await Cart.findAll({
                where: { isConfirmed: true}
            })
            const ordersByNotAllow = await Cart.findAll({
                where: { isConfirmed: false}
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
                include: [{ model: User, attributes: ['first_name', 'sur_name', 'email', 'nickname']}, {model: Auto, attributes: ['model', 'src_img']}],
                where: {
                    id_cart: id
                },
            })
            if(order) {
                res.status(200).json({
                    status: 'success', 
                    data: order
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
            const { isConfirmed, id_user } = req.body
            const orderProccess = await Cart.update({isConfirmed, isWait: false}, { where: {id_cart: id_user}})
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

}

export const OrderCtrl = new OrderController();