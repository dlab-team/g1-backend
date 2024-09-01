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
  actualizado_al DATE,
  rol_id BIGINT REFERENCES roles(id),
  notas TEXT,
  activo BOOLEAN
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
  salario TEXT,
  nombre_empresa TEXT,
  creado_en TIMESTAMP,
  lista_id BIGINT REFERENCES listas(id)
  modalidad_id BIGINT REFERENCES modalidad(id),
  ubicacion_id BIGINT REFERENCES ubicacion(id),
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
  objetivo TEXT,
  estado BOOLEAN,
  descripcion TEXT,
  instrucciones TEXT,
  tipo VARCHAR,
  plazo DATE,
  cumplimiento INT,
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
  rol TEXT
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