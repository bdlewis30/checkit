const handleError = (error, res) => {
    res.status(500).send(error)
};

const controller = {
    getAllAccounts: (req, res) => {
        const db = req.app.get('db')
        const users_id = req.headers['x-user-id'];

        db.accounts.get_all_accounts([users_id]).then(res => {
            req.status(200).send(res)
        }).catch(error => handleError(error, res))
    }
}

module.exports = controller;