INSERT INTO Transactions (acct_type, t_date, t_desc, debits, credits, acct_id)
VALUES ($1, $2, $3, $4, $5, $6);
SELECT t.*, a.acct_name, a.start_bal 
FROM Transactions t 
JOIN Accounts a ON t.acct_id = a.id
WHERE acct_id = $6;