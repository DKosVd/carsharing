import dotenv from 'dotenv'
dotenv.config();
import {Sequelize} from 'sequelize'
import { pool } from '../core/dbConnection.js';
import { validationResult } from 'express-validator';
import { generateHashMD5 } from '../utils/generateHash.js';
import mailer from '../core/mailer.js';
import jwt from 'jsonwebtoken'
import { jwtSignRole } from '../utils/jwtSignRole.js';
import { User } from '../models/user.js';
import { Auto, Cart } from '../models/cart.js';
import { MarkAuto } from '../models/mark_of_auto.js';
const {Op} = Sequelize;


class UserController {


    async verifyUser(req, res) {
        try {
            const hash = req.query.hash
            const user = await User.findOne({
                where: {confirmed_hash: hash}
            })
            if (user) {
                await User.update({ confirmed: true }, { where: {confirmed_hash: hash} })
                res.status(200).json({
                    status: 'success'
                })
            } else {
                res.status(404).send();
                return;
            }
        } catch (err) {
            res.json({
                status: 'error',
                message: err.message
            })
        }
    }

    async getUsers(req, res) {
        try {
            if(Object.keys(req.query).length !== 0) {
                const usersBySort = await User.findAll( {
                    where: {[Op.and]: [{id_role: 1, isBanned: false}]},
                    order: [[req.query.name, req.query.sort]]
                })
                if(usersBySort.length) {
                    res.status(200).json({
                        status: 'success',
                        data: usersBySort
                    })
                    return
                } else {
                    res.status(404).send();
                    return;
                }
            }
            const users = await User.findAll( {
                where: {[Op.and]: [{id_role: 1, isBanned: false}]},
                // attributes: ['id_user', 'confirmed', 'first_name'],
                // include: [{model: Role, required: true}]
            })
    
            if (users) {
                res.status(200).json({
                    status: 'success',
                    data: users
                })
                return
            } else {
                res.status(404).send();
                return;
            }
        } catch (err) {
            res.json({
                status: "error",
                message: err.message
            })
        }
    }

    async getUser(req, res) {
        try {
            const idOfUser = req.params.id
            const user = await User.findOne({
                attributes: {
                    exclude: ['password', 'confirmed_hash', 'isBanned', 'id_role'],
                },
                where: {
                    id_user: idOfUser
                },
                include: {model: Cart,  attributes: {
                    exclude: ['id_user', 'id_cart', 'id_avto'],
                },include: {
                    model: Auto,   attributes: {
                        exclude: ['id_mark', 'id_trans', 'id_drive', 'id_rudder', 'id_type', 'id_price'],
                    }, include: {
                        model: MarkAuto, through: {
                            attributes: []
                        }
                    }
                }}
            })
            if (user) {
                res.status(200).json({
                    status: 'success',
                    data: user
                })
            } else {
                res.status(404).send();
                return;
            }
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: err.message
            })
        }
    }

    async getUserInfo(req, res) {
        try {   
            const user = req.user;
            if(user) {
                res.status(200).json({
                    status: "success",
                    data: user
                })
                return;
            } 
            res.status(404).send();
        } catch(err) {
            res.status(500).json({
                status: 'error',
                message: err.message
            })
        }
    }

    async createUser(req, res) {
        try {
            const err = validationResult(req)
            if (!err.isEmpty()) {
                res.status(400).json({
                    status: 'error',
                    message: err.message
                })
                return;
            }
            const user = await User.findOne({
                where: {email: req.body.email}
            }
            )
            if (user) {
                res.status(409).json({
                    status: 'Email Already in use'
                })
                return;
            }

            const data = {
                ...req.body,
                password: generateHashMD5(req.body.password + process.env.SECRET_KEY),
                confirmed_hash: generateHashMD5(req.body.email + process.env.SECRET_KEY)
            }
            delete data.passwordConfirm
            console.log(data)
            const userNew = await User.create(data)
            if (userNew) {
                res.status(200).json({
                    status: 'success',
                    data: data
                })
            } else {
                res.status(400).json({
                    status: 'error'
                })
            }
            //Todo: пока что убрать, потому что ограничено кол-во сообщений на mailtrap
            // mailer.sendMail({
            //     from: 'admin@carsharing.com',
            //     to: req.body.email,
            //     subject: 'Подтверждение почты Carsharing',
            //     html: `<p>Для того, чтобы подтвердить email перейдите по этой <a href="http://localhost:${process.env.LOCAL_PORT}/user/verify?hash=${data.confirmed_hash}">ссылке</a></p>`
            // }, (err, info) => {
            //     if(!err) {
            //         res.json({
            //             status: 'success',
            //             data: data
            //         }) 
            //     } else {
            //         res.json({
            //             status: 'error',
            //             message: err.message
            //         })
            //     }          
            // })


        } catch (err) {
            res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    }

    async deleteUser(req, res) {
        try {
            const idOfUser = req.params.id;
            const userNew = await User.update({isBanned: true}, {where: {id_user: idOfUser}}) 
            if (userNew) {
                res.status(200).json({
                    status: 'success'
                })
            } else {
                res.status(404).send();
                return;
            }
        } catch (err) {
            res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    }

    async updateUser(req, res) {
        try {
            const updateInfo = req.body;
            const user = await User.update(updateInfo, {where: {id_user: updateInfo.id_user}})
            if(user[0]) {
                res.status(200).json({
                    status: 'success'
                })
                return 
            }
        } catch(err) {
            res.status(500).json({
                status: 'error',
                message: err.message
            })
        }
    }

    async afterLogin(req, res) {
        try {
            // TODO: Написать функцию
            const reqUser = JSON.stringify(req.user);
            const user = JSON.parse(reqUser)
            if(Object.keys(user) !== 0) {
                switch(user.id_role){
                    case 1:
                        const dataUser =  jwtSignRole(user, process.env.SECRET_KEY, '7d')
                        res.json(dataUser)
                        break;
                    case 2:
                        const dataAdmin = jwtSignRole(user, process.env.ADMIN_SECRET_KEY, '30d')
                        console.log(dataAdmin)
                        res.json(dataAdmin)
                        break;
                    default:
                        break;
                }
            } else {
                res.status(404).send();
            }
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: err.message
            })
        }
    }
}

export const UserCtrl = new UserController();