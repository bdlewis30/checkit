const axios = require('axios')
const handleError = (error, res) => {
    res.status(500).send(error)
}

module.exports = {
    getUser: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.find_user(id).then(results => {
            res.status(200).send(results)
        }).catch(error => handleError(error, res))
    }
}