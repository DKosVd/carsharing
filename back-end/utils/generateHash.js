import crypto from 'crypto';

export const generateHashMD5 = (value)=> {
    return crypto.createHash('md5').update(value).digest('hex');
}