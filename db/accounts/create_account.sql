INSERT INTO accounts (account_name, open_balance, acct_num, user_id)
VALUES($1, $2, $3, $4)
RETURNING *;