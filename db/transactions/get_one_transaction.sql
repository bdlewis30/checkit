SELECT t.*, a.acct_name 
FROM transactions t 
JOIN accounts a ON t.acct_id = a.id
WHERE t.id = $1
AND t.acct_id = $2;