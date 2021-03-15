import { pool } from '../core/dbConnection.js';
import { queryWithCheck } from '../utils/queryCheck.js'
import { validationResult } from 'express-validator';

class carController {

    async getAutos(_, res) {
        try {
            const [autos] = await pool.execute("SELECT auto.id_auto, auto.is_present, auto.model, auto.src_img, price.per_hour,  mark_of_auto.name_mark, type_of_auto.name_type, drive.name_drive FROM `auto` INNER JOIN price ON price.id_price = auto.id_price INNER JOIN mark_of_auto ON mark_of_auto.id_mark = auto.id_mark INNER JOIN type_of_auto ON auto.id_type = type_of_auto.id_type INNER JOIN drive ON drive.id_drive = auto.id_drive INNER JOIN rudder ON rudder.id_rudder = auto.id_rudder")
            if(autos.length) {
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
            const [auto] = await pool.execute("SELECT auto.id_auto, transmission.name_trans, auto.is_present, auto.model, auto.seats, auto.src_img, price.per_hour, price.per_day, mark_of_auto.name_mark, type_of_auto.name_type, drive.name_drive, rudder.name_rudder FROM `auto` INNER JOIN price ON price.id_price = auto.id_price INNER JOIN mark_of_auto ON mark_of_auto.id_mark = auto.id_mark INNER JOIN type_of_auto ON auto.id_type = type_of_auto.id_type INNER JOIN drive ON drive.id_drive = auto.id_drive INNER JOIN rudder ON rudder.id_rudder = auto.id_rudder INNER JOIN transmission ON transmission.id_trans = auto.id_trans  where id_auto = ?", [idAuto])
            if( auto.length ) {
                res.status(200).json({
                    status: "success",
                    data: auto[0]
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
