CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic TEXT
);

CREATE TABLE posts(
    id SERAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INT REFERENCES users(id)
)
-- ALTER TABLE users
-- -- DROP COLUMN password
-- ADD COLUMN password TEXT;