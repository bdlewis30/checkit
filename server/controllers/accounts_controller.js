const handleError = (error, res) => {
    res.status(500).send(error)
};

const controller = {
    getAllAccounts: (req, res) => {
        debugger;
        const db = req.app.get('db')
        const user_id = req.headers['x-user-id'];

        db.accounts.get_all_accounts([user_id]).then(results => {
            res.status(200).send(results)
        }).catch(error => {
            console.log(error)
        })
    }
}

module.exports = controller;