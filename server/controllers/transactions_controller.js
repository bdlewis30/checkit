const handleError = (error, res) => {
    res.status(500).send(error)
};

const controller = {
    getAll: (req, res) => {
        const db = req.app.get('db')
        const acct_id = parseInt(req.params.acctId);

        db.transactions.get_all_transactions([acct_id])
        .then((transactions) => {
            res.status(200).send(transactions)
        }).catch(error => handleError(error,res))
    },
    create: (req, res) => {
        const db = req.app.get('db')
        const user_id = req.headers['x-user-id']; 
        const { t_date, t_desc, debits, credits, balance } = req.body

        db.transactions.create_transaction([t_date, t_desc, debits, credits, balance, user_id])
            .then((transactions) => {
                res.status(200).send(transactions[0])
            }).catch(error => handleError(error, res))
    }
}

module.exports = controller;