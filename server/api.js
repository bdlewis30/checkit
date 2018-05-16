const express = require('express');
const router = express.Router();

const accounts_controller = require('./controllers/accounts_controller');
// const transactions_controller = require('./controllers/transactions_controller');

// Accounts
router.get('/accounts', accounts_controller.getAllAccounts);
router.get('/accounts/:id', accounts_controller.getOneAccount);
router.post('/accounts', accounts_controller.create);
router.put('/accounts/:id', accounts_controller.update);
router.delete('/accounts/:id', accounts_controller.delete);

// Transactions
// router.get('/accounts/:acctId/transactions', transactions_controller.getAll)

module.exports = router;