module.exports = {
    getUserpage: (req, res) => {
        const db = req.app.get('db')
        const {user_id} = req.params


        db.get_user_kennel(+user_id)
            .then((results) => {
                // console.log(results,"these are the results!")
                delete results[0].password
                res.status(200).send(results[0])

            })
            .catch(error => res.status(500).send(error))
    },
    getBreeds: (req, res) => {
        const db = req.app.get('db')

        db.get_breeds()
            .then(breeds => res.status(200).send(breeds))
            .catch(error => res.status(500).send(error))
    },
    search: (req, res) => {
        const db = req.app.get('db')
        const {breed, state} = req.query

        db.search(breed, state)
            .then(kennels => res.status(200).send(kennels))
            .catch(error => res.status(500).send(error))

    },
    getStates: (req, res) => {
        const db = req.app.get('db')

        db.get_states()
            .then(states => res.status(200).send(states))
            .catch(error => res.status(500).send(error))
    },
    editProfile: async (req, res) => {
        const db = req.app.get('db')
        const {kennel_id, kennel_name, state_id, breed_id, registered_dogs, registry, female_dogs, male_dogs, breed_tests, user_bio, user_id, profile_pic, facebook, instagram, twitter, website} = req.body
        // const {user_id} = req.session.user
        // console.log(user_id, profile_pic, 'user and pic')


        await db.update_user(user_id, profile_pic, facebook, instagram, twitter, website)
            .catch(error => console.log(error))
        await db.update_kennel(kennel_id, kennel_name, state_id, breed_id, registered_dogs, registry, female_dogs, male_dogs, breed_tests, user_bio)
            .catch(error => console.log(error))

        const results = await db.get_user_kennel(user_id)
        return res.status(200).send(results[0])
    },
    updateState: async (req, res) => {
        const db = req.app.get('db')
        const {state_id, breed_id, kennel_id} = req.body
        const {user_id} = req.session.user

        await db.update_dropdowns(kennel_id, state_id, breed_id)

        db.get_user_kennel(+user_id)
            .then((results) => {
                delete results[0].password
                res.status(200).send(results[0])

            })
            .catch(error => res.status(500).send(error))
    }
}