UPDATE accounts
SET account_name = $1, open_balance = $2, acct_num = $3
WHERE id = $4
AND user_id = $5
RETURNING *;