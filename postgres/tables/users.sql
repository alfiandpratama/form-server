  
BEGIN TRANSACTION;

CREATE TABLE users (
    id serial PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender CHAR(1) DEFAULT 0,
    email text UNIQUE NOT NULL,
    mobile_number VARCHAR(50) UNIQUE NOT NULL,
    dob DATE,
    joined TIMESTAMP NOT NULL
);

COMMIT;