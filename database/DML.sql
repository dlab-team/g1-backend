-- Inserta los roles iniciales
INSERT INTO roles (id, nombre) VALUES (1, 'admin'), (2, 'user');

-- Añade una restricción para permitir solo estos dos roles
ALTER TABLE roles
ADD CONSTRAINT roles_id_check CHECK (id IN (1, 2));

-- Añade una restricción para evitar duplicación de nombres
ALTER TABLE roles
ADD CONSTRAINT roles_nombre_unique UNIQUE (nombre);