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
        }).catch(error => handleErrors(error,res))
    },
}

module.exports = controller;