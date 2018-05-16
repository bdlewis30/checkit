CREATE TABLE IF NOT EXISTS transactions (
id SERIAL PRIMARY KEY,
t_date DATE,
t_desc VARCHAR(180),
debits MONEY,
credits MONEY,
balance MONEY,
acct_id INTEGER REFERENCES accounts(id)
);