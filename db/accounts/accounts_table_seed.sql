CREATE TABLE IF NOT EXISTS accounts (
    id SERIAL PRIMARY KEY,
    account_name VARCHAR(50),
    open_balance MONEY NOT NULL,
    acct_num NUMERIC(4),
    user_id INTEGER REFERENCES users(id)
);