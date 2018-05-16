INSERT INTO transactions (t_date, t_desc, debits, credits, balance, acct_id)
VALUES ($1, $2, $3, $4, $5, $6)
WHERE balance = a.balance + a.debits - a.credits
JOIN accounts a ON t.acct_id = a.id;
SELECT t.*, a.account_name, a.open_balance 
FROM transactions t 
JOIN accounts a ON t.acct_id = a.id
WHERE acct_id = $6;