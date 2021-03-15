import { pool } from '../core/dbConnection.js';

async function queryWithCheck(table, valueOfsmth, nameOfsmth, valueFromObj) {
    try {
        if(!valueOfsmth) {
            return;
        }
        const [row] = await pool.execute(`Select * from ${table} where ${nameOfsmth} = ?`, [valueOfsmth])
        if(row.length) {
            return row[0][valueFromObj]
        } else {
            const [answer] = await pool.execute(`Insert into ${table} (${nameOfsmth}) values(?)`, [valueOfsmth])
            if( answer.affectedRows ) {
                return answer.insertId
            }
            return null
        }
    } catch(err) {
        throw Error(err)
    }
}

export { queryWithCheck }