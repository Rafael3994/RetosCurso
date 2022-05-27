DROP DATABASE IF EXISTS retoSQL;
CREATE DATABASE IF NOT EXISTS retoSQL;
USE retoSQL;

CREATE TABLE IF NOT EXISTS ZAPATILLAS (
    codigo INT NOT NULL AUTO_INCREMENT,
    sexo VARCHAR(20),
    modelo VARCHAR(100),
    colores VARCHAR(50),
    tallas INT, 
    precio FLOAT,
    PRIMARY KEY (codigo)
);

INSERT INTO ZAPATILLAS (sexo, modelo, colores, tallas, precio) VALUES 
    ('mujer', 'modelo1', 'blanco', '36', '16.5'),
    ('mujer', 'modelo2', 'negro', '45', '20'),
    ('hombre', 'modelo3', 'verde', '40', '15');

CREATE TABLE IF NOT EXISTS CLIENTES (
    codigo INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50),
    apellidos VARCHAR(100),
    direccion VARCHAR(255),
    PRIMARY KEY (codigo)
);

INSERT INTO CLIENTES (nombre, apellidos, direccion) VALUES 
    ('cliente1', 'apellidoscliente1', 'calle 1 porteria 1'),
    ('cliente2', 'apellidoscliente2', 'calle 2 porteria 2'),
    ('cliente3', 'apellidoscliente3', 'calle 3 porteria 3');

CREATE TABLE IF NOT EXISTS REGISTROS (
    codigo INT NOT NULL AUTO_INCREMENT,
    idCliente INT,
    idZapatillas INT,
    fecha DATE,
    PRIMARY KEY (codigo),
    FOREIGN KEY (idCliente) REFERENCES CLIENTES(codigo),
    FOREIGN KEY (idZapatillas) REFERENCES CLIENTES(codigo)
);

INSERT INTO REGISTROS (idCliente, idZapatillas, fecha) VALUES 
    (1, 3, now()),
    (3, 2, now()),
    (2, 1, now());

CREATE TABLE IF NOT EXISTS REBAJAS (
    codigo INT NOT NULL AUTO_INCREMENT,
    fecha_inicio DATE,
    fecha_final DATE,
    idZapatillas INT,
    PRIMARY KEY (codigo),
    FOREIGN KEY (idZapatillas) REFERENCES CLIENTES(codigo)
);

INSERT INTO REBAJAS (fecha_inicio, fecha_final, idZapatillas) VALUES 
    ('2022-05-15', '2022-06-15', 2),
    ('2022-03-15', '2022-04-15', 1),
    ('2022-01-15', '2022-02-15', 3);

-- Ventas totales
SELECT COUNT(*) FROM REGISTROS;
-- Número de usuarios registrados en la web
SELECT COUNT(*) FROM CLIENTES;
