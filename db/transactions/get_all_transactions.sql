SELECT t.*, a.acct_name, a.start_bal 
FROM transactions t 
JOIN accounts a ON t.acct_id = a.id
WHERE acct_id = $1;