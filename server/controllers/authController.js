const bcrypt = require('bcrypt')


module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const transporter = req.app.get('transporter');
        const {username, password, email} = req.body

        const existingUser = await db.check_user(username);
        if (existingUser[0]) {
            return res.status(409).send('This user already exists!')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = await db.register_user([username, hash, email])
        await db.create_kennel(newUser[0].user_id)
        const sendEmail = {
            from: 'SomewhereImportant@totallylegit.com',
            to:email, subject:'Welcome to Reputable Rover Resource',
            html: "Welcome to Reputable Rover Resource"
        }
        transporter.sendMail( sendEmail ,(error, data) => {
            if(error) {
                console.log(error)
            } else {
                console.log('Email sent!')
            }
        })
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
                    user_id: user[0].user_id,
                    username: user[0].username,
                    profile_pic: user[0].profile_pic
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
    },
    getUser: (req, res) => {
        if (!req.session.user) {
            return res.status(401).send("User not found.")
        }
        delete req.session.user.pw
        res.status(200).send(req.session.user)
    },

}