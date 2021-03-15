import dotenv from 'dotenv';
dotenv.config();
import { pool } from '../core/dbConnection.js';

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JWTstategy, ExtractJwt} from 'passport-jwt';
import { generateHashMD5 } from '../utils/generateHash.js';

//Todo: Добавить вход по nickname, но изначально нужно сделать добавление только уникальных nickname

passport.use("user-role", new LocalStrategy(
    async function (username, password, done) {
        try {
            const [user] = await pool.execute('Select * from user where email = ?', [username]);
            if(!(user.length)) {
                return done(null, false, {message: 'Пользователь с таким именем не существует'})
            }
            if(!(user[0].password === generateHashMD5(password + process.env.SECRET_KEY))) {
                return done(null, false, {message: 'Неправильный пароль'})
            }
            return done(null, user[0]);
        } catch (err) {
            return done(err);
        }
    }
))

passport.use("admin-role", new LocalStrategy(
    async function (username, password, done) {
        try {
            const [user] = await pool.execute('Select * from user where email = ?', [username]);
            if(!(user.length)) {
                return done(null, false, {message: 'Пользователь с таким именем не существует'})
            }
            if(user[0].id_role !== 2) {
                return done(null, false, {message: 'У вас нет прав доступа'});
            }
           
            if(!(user[0].password === generateHashMD5(password + process.env.SECRET_KEY))) {
                return done(null, false, {message: 'Неправильный пароль'})
            }
            return done(null, user[0]);
        } catch (err) {
            return done(err);
        }
    }
))


passport.use("admin", new JWTstategy({
    secretOrKey: process.env.ADMIN_SECRET_KEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, async(token, done) => {
    try {
        return done(null, token.user)
    } catch(err) {
        done(err)
    }
}))


passport.use("user", new JWTstategy({
    secretOrKey: process.env.SECRET_KEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, async(token, done) => {
    try {
        return done(null, token.user)
    } catch(err) {
        done(err)
    }
}))

passport.serializeUser(function(user, done){
    done(null, user.id_user)
})//Сохраняет req.session.passport.user = {id : 'xxx'}

passport.deserializeUser(async function(id, done) { 
   const [user] = await pool.execute('Select * from user where id_user = ?', [id])
   done(err, user)
}) //достает id из req.session.passport.user и ищет в бд по id пользователя

export { passport }