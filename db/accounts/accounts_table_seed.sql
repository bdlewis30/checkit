CREATE TABLE IF NOT EXISTS accounts (
    id SERIAL PRIMARY KEY,
    account_name VARCHAR(50),
    start_balance MONEY NOT NULL,
    deposit MONEY,
    withdraw MONEY,
    end_balance MONEY abs(start_balance) + abs(deposit),
    users_id INTEGER REFERENCES users(id)
);