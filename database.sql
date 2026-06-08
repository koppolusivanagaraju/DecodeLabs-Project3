CREATE DATABASE studentdb;

USE studentdb;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    course VARCHAR(100),
    email VARCHAR(100)
);

-- Sample Data
INSERT INTO students(name, age, course, email)
VALUES('Sample Student',20,'CSE','sample@gmail.com');