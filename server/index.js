const express = require('express')
const massive = require('massive')
require('dotenv').config()
const authCtrl = require('./authController')
const postCtrl = require('./postController')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const session = require('express-session')

const app = express()

app.use(express.json())

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 *60 *24}
}))

app.post('/api/auth/register', authCtrl.register)
app.post('/api/auth/login', authCtrl.login)

// app.get('/api/posts/:userid', postCtrl)
// app.post('/api/post/:userid', postCtrl)
// app.get('/api/post/postid', postCtrl)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DB Connected')
    app.listen(SERVER_PORT, () => console.log(`app is listening to port ${SERVER_PORT}`))
})