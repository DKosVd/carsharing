const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const bcrypt = require('bcrypt');
const connection = require('./db/db');
const connectionLogin = require('./db/db_login');
const session = require('express-session');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret',
    cookie: {maxAge: 600000},
    saveUninitialized: true,
    resave: true,
    
}));

app.post('/login', (req, res) => {
    const { email, password} = req.body;
    if(req.session.authenticated) {
        res.send(req.session.user)
    } else {
        connectionLogin.execute("Select * from `users` where `email` = ?", [email]).then(([rows]) => {
            rows.length  ?  bcrypt.compare(password, rows[0].password).then(result => {
                if( result ) {
                    const {id, name} = rows[0];
                    req.session.authenticated = true;
                    req.session.user = {
                        id,
                        name,
                    }
                    res.send(rows[0])
                } else {
                    res.send('password')
                }
            }) : res.send('email')
        })
    }
})

app.post('/order', (req, res) => {
    const {id_car_mark, name_mark, id_user, DateAfter, Price, DateBefore, fullname} = req.body;
    connectionLogin.query("Insert into `zakaz` (`id_car_mark`, `name_mark`, `id_user`, `DateAfter`, `DateBefore`, `price`, `fullname`) VALUES(?, ?, ?, ?, ?, ?, ?)", [id_car_mark, name_mark, id_user, DateAfter, DateBefore, Price, fullname]).then((result) => {
        connection.query('Update `autos` SET count=count-1 WHERE `fullname` = ?', [fullname], function(err, result) {
            if(err) console.error(err)
            console.log(`Count decrement ${fullname}`)
        })
        res.send('Add')
    }).catch( err =>  {
        console.error(err)
    })
})

app.get('/orders/:id', (req, res) => {
    const { id } = req.params;
    connectionLogin.query("SELECT * FROM `zakaz` WHERE `id_user` = ?", [id]).then(([rows]) => {
        rows.length ? res.send(rows) : res.send(null);
    }).catch( err => {
        console.error(err)
    })
})

app.post('/register', (req, res) => {
    connectionLogin.execute("Select * from `users` where `email` = ?", [req.body.email]).then(([rows]) => {
        rows.length ? res.send('emailExist') : bcrypt.hash(req.body.password, 12).then((hash_pass) => {
            connectionLogin.query("Insert into `users` (`name`, `email`, `password`) VALUES(?, ?,?)", [req.body.name, req.body.email, hash_pass]).
            then( result => {
                res.send('AccountCreated')
            }).catch(err => {
                console.error(err)
            })
        })
    })
})

app.get('/main/:type', (req, result) => {
    if (req.params.type == 'Все машины') {
        connection.query('SELECT * FROM autos', function (err, data) {
            if (err) console.error(err); // maybe result.send(err)
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



app.get('/main', (req, res) => {
    if(req.session.authenticated) {
        res.send(req.session.user)
    } else {
        res.send('NoAuth')
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy()
    res.send('LogOut')
})

app.listen(5000, () => console.log(`Listening on port 5000`));