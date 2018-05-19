const handleError = (error, res) => {
    res.status(500).send(error)
};

const controller = {
    getAllAccounts: (req, res) => {
        const db = req.app.get('db')
        const user_id = req.headers['x-user-id'];

        db.accounts.get_all_accounts([user_id]).then(results => {
            res.status(200).send(results)
        }).catch(error => handleError(error, res))
    },
    getOneAccount: (req, res) => {
        const db = req.app.get('db')
        const user_id = req.headers['x-user-id'];
        const id = parseInt(req.params.id)

        db.accounts.get_one_account([id, user_id])
            .then((rows) => {
                res.status(200).send(rows[0])
            }).catch(error => handleError(error, res))
    },
    create: (req, res) => {
        const db = req.app.get('db')
        const user_id = req.headers['x-user-id'];
        const { account_name, open_balance, acct_num } = req.body

        db.accounts.create_account([account_name, open_balance, acct_num, user_id])
            .then((accounts) => {
                res.status(200).send(accounts[0])
            }).catch(error => handleError(error, res))
    },
    update: (req, res) => {
        const db = req.app.get('db')
        const user_id = req.headers['x-user-id'];
        const { account_name, open_balance, acct_num } = req.body

        db.accounts.update_accounts([account_name, open_balance, acct_num, id, user_id])
            .then((accounts) => {
                res.status(200).send(accounts[0])
            }).catch(error => handleError(error, res))
    },
    delete: (req, res) => {
        const db = req.app.get('db')
        const user_id = req.headers['x-user-id'];
        const id = parseInt(req.params.id)

        db.accounts.delete_account([id, user_id])
        .then((accounts) => {
            res.status(200).send()
        }).catch(error => handleError(error, res))
    }
}

module.exports = controller;