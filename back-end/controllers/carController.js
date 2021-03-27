import { pool } from '../core/dbConnection.js';
import { queryWithCheck } from '../utils/queryCheck.js'
import { validationResult } from 'express-validator';
import { Auto } from '../models/auto.js';
import { Price } from '../models/price.js';
import { MarkAuto } from '../models/mark_of_auto.js';
import { TypeAuto } from '../models/type_of_auto.js';
import { Drive } from '../models/drive.js';
import { Rudder } from '../models/rudder.js';
import { Transmission } from '../models/transmission.js';

class carController {

    async getAutos(_, res) {
        try {
            const autos = await Auto.findAll({
                attributes: ['id_auto', 'is_present', 'model', 'src_img'],
                include: [ {model: Price, attributes: ['per_hour']}, {model: MarkAuto}, {model: TypeAuto}, {model: Drive} ]
            })
            if(autos) {
                res.status(200).json({
                    status: 'accesss',
                    data: autos
                })
            } else {
                res.status(404).send()
                return;
            }
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: err.message
            })
        }
    }

    async getAuto(req, res) {
        try {
            const idAuto = req.params.id
            const auto = await Auto.findOne({
                attributes: ['id_auto', 'is_present', 'model', 'src_img', 'seats'],
                include: [ {model: Price, attributes: ['per_hour']}, {model: MarkAuto}, {model: TypeAuto}, {model: Drive}, {model: Rudder}, {model: Transmission} ],
                where: {
                    id_auto: idAuto
                }
            })
            if( auto ) {
                res.status(200).json({
                    status: "success",
                    data: auto
                })
            } else {
                res.status(404).send();
                return;
            }
        } catch(err) {
            res.status(500).json({
                status: 'error',
                message: err.message
            })
        }
    }
    
    async getAutoOfModel(req, res) {
        try {
            const { model } = req.params;
            const [auto] = await pool.execute('Select * from auto where model = ?', [model])
            if(auto.length) {
                res.status(200).json({
                    status: 'success',
                    data: auto
                })
            } else {
                res.status(404).send();
                return;
            }
        } catch(err) {
            res.status(500).json({
                status: 'error',
                message: err.message
            })
        }
    }

    async getAutoOfType(req, res) {
        try {

        } catch(err) {

        }
    } // Или по запросу получать, либо получать все авто и передвать в компонет с помощью filter необходимые авто

    async addAuto(req, res) {
        try {
            const error = validationResult(req);
            if(!error.isEmpty()) {
                res.json({
                    status: "error",
                    message: error.array()
                })
            }
            const auto = req.body
            const data = {
                id_mark: await queryWithCheck('mark_of_auto', auto.name_mark, 'name_mark', 'id_mark'),
                is_present: auto.is_present,
                model: auto.model,
                id_trans: await queryWithCheck('transmission', auto.name_trans, 'name_trans', 'id_trans'),
                id_drive: await queryWithCheck('drive', auto.name_drive, 'name_drive', 'id_drive'),
                id_rudder: await queryWithCheck('rudder', auto.name_rudder, 'name_rudder', 'id_rudder'),
                seats: +auto.seats,
                id_type: await queryWithCheck('type_of_auto', auto.name_type, 'name_type', 'id_type'),
                id_price: await queryWithCheck('price', auto.per_hour,  'per_hour', 'id_price'),
                src_img: auto.img
            }

            const [autoIn] = await pool.execute(`Insert into auto (${Object.keys(data)}) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [...Object.values(data)])
            if(autoIn.affectedRows) {
                res.status(200).json({
                    status: 'success',
                    data
                })   
            }
        } catch(err) {
            res.status(500).json({
                status: 'error',
                message: err.message
            })
        }
    }

    async updateAuto(req, res) {
        try {
             
        } catch(err) {

        }
    }

    async deleteAuto(req, res) {
        try {
            const idAuto = req.params.id
            console.log(idAuto)
            const [auto] = await pool.execute("Delete from auto where id_auto = ?", [idAuto])
            if( auto.affectedRows ) {
                res.status(200).json({
                    status: "success",
                })
            } else {
                res.status(404).send();
                return;
            }
        } catch(err) {
            res.status(500).json({
                status: 'error',
                message: err.message
            })
        }
    }

}

export const carCtrl = new carController();
