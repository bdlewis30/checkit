UPDATE transactions
SET t_date = to_date($1, 'YYYY/MM/DD'), t_desc=$2, debits = $3, credits = $4
WHERE id = $5
AND user_id = $6
RETURNING *;