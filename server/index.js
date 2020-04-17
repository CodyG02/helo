const express = require('express')
const massive = require('massive')
require('dotenv').config()
import authCtrl from './authController'
import postCtrl from './postController'
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

// app.post('/api/auth/register', authCtrl)
// app.post('/api/auth/login', authCtrl)

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