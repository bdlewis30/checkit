CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    picture TEXT,
    auth_id TEXT,
    user_id INTEGER REFERENCES Users (id)
)