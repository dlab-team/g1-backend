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
INSERT INTO "public"."usuarios" ("id", "nombre", "apellido", "password", "creado_en", "foto", "actualizado_al", "rol_id", "notas", "pais", "educacion", "cargo", "experiencia", "correo") VALUES ('007ecf09-e851-41ee-ae56-2ed9b6321eb8', 'Tiare', 'Cornejo', '$2b$10$C.By88w2HxHhgQysapgu8.LrAqxr0jud3f0rurva5tJGhRdGsTtxW', '2024-09-11 23:32:00.994923+00', null, '2024-09-11 23:32:00.994923+00', '2', null, 'Chile', 'Desarrollador Fullstack', null, 'Sin Experiencia', 'tcornejot@uft.edu'), ('1d771eec-4bf8-463c-b8c8-9a1f8b4fb1e4', 'FERNANDO', 'SEPULVEDA', '$2b$10$wFQzxXxXo6Cp7Gh7fBqrSemqwwHH47TeBoU1i4hDB0GCTzdAU8Ray', '2024-09-11 22:40:31.219047+00', null, '2024-09-11 22:40:31.219047+00', '2', null, 'Chile', 'Desarrollador Fullstack', null, 'Sin Experiencia', 'fernandosepulveda1994@gmail.com'), ('7450775c-1b01-4f5b-a662-d1bdee38a74b', 'Juan', 'Pérez', '$2b$10$SeeMQJ.FTH/.mCqFt8oA1.qhHCA3enaOU0T8.VzTkfVh3MdCYTTBO', '2024-09-08 05:04:06.061813+00', null, '2024-09-08 05:04:06.061813+00', '2', null, 'México', 'Ingeniero de Sistemas', 'Desarrollador', 'Senior', 'juan.perez@example.com'), ('8a224456-24b6-4a33-85b5-c241354762cf', 'Usuario nuevo tres', 'de Ejemplo tres', '$2b$10$P6szOvhXVT2UWA7t8FAD1.MYoQNVvKMOfr2oMUNVsTK.XjTSoaDki', '2024-09-09 23:49:29.354834+00', null, '2024-09-09 23:49:29.354834+00', '2', null, 'Perú', 'Analista de Sistemas', null, 'Semi-Senior', 'usuario.ejemplo3@example.com'), ('b4964d70-3b5e-4173-bc07-b3ec74722f8d', 'Fernando', 'Sepulveda Benavides', '$2b$10$vIKR/zV0kNaRJfQYwGkGR.eZl4iDo9Y15tAbZ52eg4lCcQ4slJPQW', '2024-09-10 02:16:41.524263+00', null, '2024-09-10 02:16:41.524263+00', '2', null, 'Argentina', 'Desarrollador Frontend', null, 'Sin Experiencia', 'fernando@123.gmail.com'), ('ce859f75-8d47-4da1-99d2-204e9b16bc5e', 'Jose', 'Quintero', '$2b$10$rjOWV4PShqHnVnJ9PaGfg.Wal4qDYEvX28grqmPBq.lfaVgvGTkC2', '2024-09-12 22:05:24.944158+00', null, '2024-09-12 22:05:24.944158+00', '2', null, 'Chile', 'Desarrollador Fullstack', null, 'Trainee', 'j.giganti9@gmail.com'), ('e2e48f00-090b-47cc-8914-73ae8d026cbf', 'Cristian', 'Cornejo', '$2b$10$8ZikhoMqtyWP..GKupf/CeZ5Q/qQCnS6zs0t1cNknCSyi/vylQUIW', '2024-09-12 00:04:55.113131+00', null, '2024-09-12 00:04:55.113131+00', '2', null, 'Chile', 'Desarrollador Fullstack', null, 'Trainee', 'cristian1234@gmail.com'), ('f3448880-3ab0-41cd-92cf-8509ed0775f9', 'Diego', 'Rojas', '$2b$10$VxrtTNNiKYLxsyo1I6RyWu5n08HG927rzCBy1iFEu2sBg1Bk5szHK', '2024-09-11 22:53:36.231148+00', null, '2024-09-11 22:53:36.231148+00', '2', null, 'Argentina', 'Desarrollador Fullstack', null, 'Trainee', 'rojasdiego.89@gmail.com');