CREATE TABLE laboratories(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    hospital_name VARCHAR(255)
);

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(50) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL,
	role VARCHAR(50)
);

CREATE TABLE employees (
	id SERIAL PRIMARY KEY,
	personal_number VARCHAR(50) UNIQUE NOT NULL,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
	lab_id INT NOT NULL,
	FOREIGN KEY(lab_id) REFERENCES laboratories(id)
);

CREATE TABLE patients (
	id SERIAL PRIMARY KEY,
	personal_number VARCHAR(50) UNIQUE NOT NULL,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
	lab_id INT NOT NULL,
	FOREIGN KEY(lab_id) REFERENCES laboratories(id)
);

CREATE TABLE lab_tests (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	description VARCHAR(255) NOT NULL,
	price NUMERIC(8,2) NOT NULL,
	lab_id INT NOT NULL,
	UNIQUE(name,lab_id),
	FOREIGN KEY(lab_id) REFERENCES laboratories(id)
);

CREATE TABLE tests_results (
	id SERIAL PRIMARY KEY,
	date DATE NOT NULL,
	referral_values DECIMAL NOT NULL,
	units VARCHAR(10) NOT NULL,
	lab_test_id INT NOT NULL,
	patient_id INT NOT NULL,
	lab_employee_id INT NOT NULL,
	FOREIGN KEY(lab_test_id) REFERENCES lab_tests(id),
	FOREIGN KEY(patient_id) REFERENCES patients(id),
	FOREIGN KEY(lab_employee_id) REFERENCES employees(id)
);
--CREATE TABLE users_roles (
--	id SERIAL PRIMARY KEY,
--	user_id VARCHAR(50) ,
--	role_id VARCHAR(255),
--	UNIQUE (username,role_name),
--    FOREIGN KEY(user_id) REFERENCES users(id),
--    FOREIGN KEY(role_id) REFERENCES roles(id)
--);


--CREATE TABLE roles (
--	id SERIAL PRIMARY KEY,
--	name VARCHAR(50) UNIQUE NOT NULL,
--	description VARCHAR(255)
--);