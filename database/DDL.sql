CREATE DATABASE BasedeDatos;

\c BasedeDatos;

CREATE TABLE Usuarios (
id UUID         PRIMARY KEY, 
nombre          VARCHAR(100) NOT NULL, 
apellido        VARCHAR(100) NOT NULL, 
correo          VARCHAR(255) NOT NULL, 
pais            VARCHAR(100) NOT NULL, 
educacion       VARCHAR(50) NOT NULL, 
cargo           VARCHAR(100) NOT NULL, 
experiencia     TEXT NOT NULL,
contraseña      VARCHAR(255) NOT NULL 
);
