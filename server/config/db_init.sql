CREATE DATABASE perntodo;

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  description VARCHAR(255)
);