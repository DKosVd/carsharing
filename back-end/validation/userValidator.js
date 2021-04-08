import { body } from 'express-validator';

let d = new Date();
let year = d.getFullYear();
let month = d.getMonth();
let day = d.getDate();
let minimumAge = new Date( year - 18, month, day).toDateString()

export const registerValidation = [
    body('first_name', 'Введите имя').isString().withMessage('Только строка').isLength({
        min:'2',
        max: '20'
    }).withMessage('Не больше 20 символов'),
    body('sur_name', 'Введите фамилию').isString().withMessage('Только строка').isLength({
        min: '2',
        max: '30'
    }).withMessage('Не больше 20 символов'),
    body('email', 'Введите e-mail').isEmail().withMessage('Неверный e-mail').isLength({
        min: 10,
        max: 40
    }).withMessage('Слишком длиная почта.'),
    body('password', 'Введите пароль').isString().isLength({
        min: 6,
    }).withMessage('Минимальное количество символов в пароле 6').custom( (password, {req}) => {
        if ( password !== req.body.passwordConfirm) {
            throw new Error('Пароли не совпадают')
        } else {
            return password;
        }
    }),
    body('nickname', 'Введите логин').isString().withMessage('Только строка').isLength({
        min: '2', 
        max: '20'
    }).withMessage('Не больше 20 символов'),
    body('age', 'Введите возраст(yyyy-mm-dd)').custom( date => {
        let enteredDate = new Date(date);
        let todayDate = new Date();
        if(enteredDate > todayDate) {
            throw new Error('Некорректная дата')
        } else {
            return date
        }
    }).isBefore(minimumAge).withMessage('Меньше 18')
]