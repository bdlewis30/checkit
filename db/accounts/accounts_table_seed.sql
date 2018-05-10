CREATE TABLE IF NOT EXISTS accounts (
    id SERIAL PRIMARY KEY,
    account_name VARCHAR(50),
    open_balance MONEY NOT NULL,
    deposit MONEY,
    withdraw MONEY,
    end_balance MONEY,
    user_id INTEGER REFERENCES users (id)
);