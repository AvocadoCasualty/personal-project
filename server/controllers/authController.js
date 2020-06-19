const bcrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const {username, password, email} = req.body
        // const profile_pic = require('../../Ahsokaderp.jpg')

        const existingUser = await db.check_user(username);
        if (existingUser[0]) {
            return res.status(409).send('This user already exists!')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = await db.register_user([username, hash, email])
        delete newUser[0].hash
        req.session.user = newUser[0]
        return res.status(200).send(req.session.user)
    },
    login: async (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;

        const user = await db.check_user(username)
        if (!user[0]) {
            return res.status(404).send('Username not found!')
        } else {
            const authenticated = bcrypt.compareSync(password, user[0].password)
            if (authenticated) {
                req.session.user = {
                    userId: user[0].user_id,
                    username: user[0].username,
                    profilePic: user[0].profile_pic
                }
                res.status(200).send(req.session.user)
            } else {
                res.status(403).send('Username or password incorrect.')
            }
        }

    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200)
    }
}