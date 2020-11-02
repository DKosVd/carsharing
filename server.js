const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const bcrypt = require('bcrypt');
const connection = require('./db/db');
const connectionLogin = require('./db/db_login');
// const cookieSession = require('cookie-session');

// app.use(cookieSession({
//     name: 'session',
//     keys: ['key1', 'key2'],
//     maxAge:  3600 * 1000 // 1hr
// }));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
   connectionLogin.execute("Select * from `users` where `email` = ?", [req.body.email]).then( ([rows]) => {
       bcrypt.compare(req.body.password, rows[0].password).then(result => {
           if (result) {
                // req.session.isLoggedIn = true; 
                // req.session.userID = rows[0].id;
                // console.log(req.session)
                console.log('Авторизовался')
               res.send(rows[0])
           } else {
               console.log('Ошибка ')
           }
       })
   })
})

app.get('/main/:type', (req, result) => {
    if (req.params.type == 'Все машины') {
        connection.query('SELECT * FROM autos', function (err, data) {
            if (err) console.error(err);
            result.send(data);
        })
    }
    else {
        connection.query('SELECT * FROM autos where type = ?', [req.params.type], function (err, data) {
            if (err) console.error(err);
            result.send(data);
        })
    }
});


app.listen(5000, () => console.log(`Listening on port 5000`));