const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) =>{
        const {username, password} = req.body
        const db = req.app.get('db')

        const existingUser = await db.check_user([username])
        if(existingUser[0]){
            return res.status(409).send('User already exists')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const [newUser] = await db.register_user([username, hash])

        req.session.user = newUser

        res.status(200).send(req.session.user)
    },

    login: async (req, res) => {
        const {username, password} =req.body
        const db = req.app.get('db')

        const existingUser = await db.check_user([username])

        if(!existingUser){
            return res.status(404).send('User does not exist')
        }

        const authenticated = bcrypt.compareSync(password, existingUser[0].password)

        if(authenticated){
            delete existingUser[0].password

            req.session.user = existingUser[0]

            res.status(200).send(req.session.user)
        } else {
            res.status(403).send('Username or password incorrect')
        }
    }
}