import { pool } from '../core/dbConnection.js';
import { Cart } from '../models/cart.js';
import { Auto } from '../models/index.js';
import { User } from '../models/index.js';


class OrderController {

    async allOrder(_, res) {
        try {
            const orders = await Cart.findAll({})
            if(orders) {
                res.status(200).json({
                    status: 'success', 
                    data: orders
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

}

export const OrderCtrl = new OrderController();