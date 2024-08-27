-- Tabla de usuarios con referencias a país, educación, experiencia, rol, y notas
CREATE TABLE usuarios (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nombre TEXT,
  email TEXT,
  contrasena TEXT,
  creado_en TIMESTAMP,
  pais_id BIGINT REFERENCES paises(id),
  educacion_id BIGINT REFERENCES educacion(id),
  foto TEXT,
  experiencia TEXT,
  actualizado_al DATE,
  rol_id BIGINT REFERENCES roles(id),
  notas TEXT
);

-- Tabla de países
CREATE TABLE paises (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nombre TEXT
);

-- Tabla de educación sin experiencia ni usuario_id
CREATE TABLE educacion (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  titulo TEXT
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

-- Tabla de aplicaciones vinculando empleo con usuario
CREATE TABLE aplicaciones (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  empleo_id BIGINT REFERENCES empleos(id),
  usuario_id BIGINT REFERENCES usuarios(id),
  categoria_id BIGINT REFERENCES categorias(id),
  fecha_aplicacion TIMESTAMP
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
  estado BOOLEAN,
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

-- Tabla de objetivos

CREATE TABLE objetivos (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nombre TEXT, 
  descripcion TEXT,
  intrucciones TEXT,
  tipo VARCHAR(30),
  cumplimiento INT,
  fecha_creacion DATE,
  estado BOOLEAN,
  plazo TEXT
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