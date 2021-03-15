import dotenv from 'dotenv';
dotenv.config();

import jwt from 'jsonwebtoken'


export function jwtSignRole(user, config, day) {
    const token = jwt.sign({user}, config, {
        expiresIn: day
    })
    return {
        status: 'success',
        ...user,
        token
    }
}