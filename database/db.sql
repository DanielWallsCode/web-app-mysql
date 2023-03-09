-- Creando la base de datos
CREATE DATABASE CrudMysqlClientes;


-- UTILIZANDO LA BASE DE DATOS
USE CrudMysqlClientes;

--  CREANDO UNA TABLA
CREATE TABLE clientes(
    id INT(6) AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    PRIMARY KEY (id) 
);

-- MOSTRAR TODAS LAS TABLAS
SHOW TABLES;

-- DESCRIBIR LA TABLA
DESCRIBE clientes;