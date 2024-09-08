-- Tabla de usuarios con referencias a país, educación, experiencia, rol, y notas
CREATE TABLE usuarios (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nombre TEXT,
  apellido TEXT,
  email TEXT,
  password TEXT,
  creado_en TIMESTAMP,
  pais TEXT,
  educacion TEXT,
  foto TEXT,
  experiencia TEXT,
  actualizado_al DATE,
  rol_id BIGINT REFERENCES roles(id),
  notas TEXT
);


-- Tabla de empleos con referencias a listas, renombres de columnas y cambios de estructura
CREATE TABLE empleos (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  cargo TEXT,
  descripcion TEXT,
  ubicacion TEXT,
  modalidad TEXT,
  salario TEXT,
  nombre_empresa TEXT,
  creado_en TIMESTAMP,
  lista_id BIGINT REFERENCES listas(id)
  usuario_id BIGINT
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);


-- Tabla de listas
CREATE TABLE listas (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nombre TEXT
);

-- Tabla de objetivos con referencia a usuarios
CREATE TABLE objetivos (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nombre TEXT,
  objetivo TEXT,
  estado BOOLEAN,
  descripcion TEXT,
  instrucciones TEXT,
  cumplimiento INT,
  fecha_creacion DATE,
  tipo VARCHAR,
  plazo DATE
  usuario_id BIGINT REFERENCES usuarios(id)
);

-- Tabla de actividades con referencia a usuarios
CREATE TABLE actividades (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  titulo TEXT,
  categoria_id BIGINT REFERENCES categorias(id),
  fecha_inicio DATE,
  fecha_fin DATE,
  nota TEXT,
  usuario_id BIGINT REFERENCES usuarios(id)
);

-- Tabla de roles
CREATE TABLE roles (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nombre TEXT
);

-- Tabla de empresas (nueva versión)
CREATE TABLE empresas (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nombre TEXT
);


-- Tabla de participantes vinculados a un objetivo

CREATE TABLE participantes (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  participante_id BIGINT REFERENCES usuarios(id),
  objetivo_id BIGINT REFERENCES usuarios(id)
);

-- Tabla de categorias

CREATE TABLE categorias (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  categoria TEXT  
)

-- Tabla de experiencias
CREATE TABLE experiencia (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  titulo tipo VARCHAR(80),
  descripcion TEXT,
  desde DATE,
  hasta DATE,
  usuario_id BIGINT REFERENCES usuarios(id)
)

CREATE TABLE modalidad (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  modalidad TEXT  
)

CREATE TABLE ubicacion (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  ubicacion TEXT  
)