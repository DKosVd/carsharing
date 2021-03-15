import { body } from 'express-validator';

export const autoValidation = [
    body('name_mark', 'Введите название марки').isString().withMessage('Введите строку').isLength({
        min:2,
        max: 20
    }),
    body('model', 'Введите название модели').isString().withMessage('Введите строку').isLength({
        min: 4,
        max: 15
    }),
    body('seats', 'Введите количество мест').isFloat({min: 2, max:9}).withMessage('Количество мест в диапазоне от 2 до 9'),
    body('name_trans', 'Введите тип трансмиссии').isString().withMessage('Введите строку').isLength({
        min: 8,
        max: 20
    }) ,
    body('name_drive', 'Введите тип привода').isString().withMessage('Введите строку').isLength({
        min: 2,
        max: 10
    }) ,
    body('name_rudder', 'Введите тип руля').isString().withMessage('Введите строку').isLength({
        min:5,
        max: 7 
    }) ,
    body('name_type', 'Введите тип автомобиля').isString().withMessage('Введите строку').isLength({
        min: 4,
        max: 15
    }) ,
    body('per_hour', 'Стоимость за час').isString().isLength({
        min:4,
        max:4
    }) ,
    body('img', 'Ссылка на фотографию автомобиля').isString().isLength({
        min: 10,
        max: 200
    }),
    body('is_present').isBoolean()
];