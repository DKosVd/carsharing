const connectionLogin = require('../../db/db_login');
const bcrypt = require('bcrypt');

class authController {
    async login(req, res) {
        try {
            const { email, password } = req.body;
            if (req.session.authenticated) {
                res.send(req.session.user)
            } else {
                const [rows] = await connectionLogin.execute("Select * from `users` where `email` = ?", [email])
                console.log(rows)
                if (rows.length) {
                    const result = await bcrypt.compare(password, rows[0].password)
                    if (result) {
                        const { id, name } = rows[0];
                        req.session.authenticated = true;
                        req.session.user = {
                            id, name
                        }
                        res.send(rows[0])
                    } else {
                        res.send('password')
                    }
                } else {
                    res.send('email')
                }
            }
        } catch (err) {
            res.send(err)
        }

    }
}


const UserCtrl = new authController();
module.exports = { UserCtrl }