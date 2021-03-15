import { pool } from '../core/dbConnection.js';



class OrderController {

    async allOrder(_, res) {
        try {
            const [orders] = await pool.execute('SELECT `cart`.`id_cart`, `cart`.`order_date`, `cart`.`return_date`, `cart`.`cost` FROM `cart`')
            if(orders.length) {
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
            const [order] = await pool.execute('SELECT `cart`.`id_cart`, `cart`.`order_date`, `cart`.`return_date`, `cart`.`cost`, `user`.`first_name`, `user`.`sur_name`, `user`.`email`, `user`.`nickname`, `user`.`id_user`, `auto`.`id_auto`, `auto`.`model`, `auto`.`src_img` FROM `cart` INNER JOIN `user` ON `user`.`id_user` = `cart`.`id_user` INNER JOIN `auto` ON `auto`.`id_auto` = `cart`.`id_avto` WHERE `cart`.`id_cart` = ?', [id])
            if(order.length) {
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