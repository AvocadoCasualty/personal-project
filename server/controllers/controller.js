

module.exports = {
    getUserpage: (req, res) => {
        const db = req.app.get('db')
        const {user_id} = req.params
        // console.log(req.params, 'these are the params')

        db.get_user_kennel(+user_id)
            .then((results) => {
                // console.log(results,"these are the results!")
                delete results[0].password
                res.status(200).send(results[0])

            })
            .catch(error => res.status(500).send(error))
    }
}