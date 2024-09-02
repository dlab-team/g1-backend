-- Inserta los roles iniciales
INSERT INTO roles (id, nombre) VALUES (1, 'admin'), (2, 'user');

-- Añade una restricción para permitir solo estos dos roles
ALTER TABLE roles
ADD CONSTRAINT roles_id_check CHECK (id IN (1, 2));

-- Añade una restricción para evitar duplicación de nombres
ALTER TABLE roles
ADD CONSTRAINT roles_nombre_unique UNIQUE (nombre);

INSERT INTO listas (id, nombre) VALUES (1, 'deseos'), (2, 'postulado'), (3, 'oferta'), (4, 'rechazado');

ALTER TABLE empresas ADD COLUMN is_deleted BOOLEAN DEFAULT FALSE;


-- Añade datos de ejemplo:

INSERT INTO paises (nombre) VALUES ('fantasilandia');
INSERT INTO educacion (titulo) VALUES ('egresado');

INSERT INTO usuarios (id, nombre, apellido, email, password, pais_id, educacion_id, rol_id)
VALUES ('superid7', 'Juan', 'Pérez', 'juanperez@example.com', 'contraseña123', 1, 1, 2);