import { z } from 'zod';

// Esquema para la creación de usuarios a conversar
export const usuarioSchema = z.object({
  nombre: z.string().min(1, { message: 'Nombre es requerido' }),
  apellido: z.string().min(1, { message: 'Apellido es requerido' }),
  correo: z.string().email({ message: 'Correo no es válido' }),
  pais: z.enum(['Estados Unidos', 'Canadá', 'México', 'Brasil', 'Reino Unido', 'Alemania', 'Francia', 'España', 'Italia', 'Australia', 'India', 'Japón', 'Chile', 'China', 'Rusia', 'Argentina', 'Sudáfrica', 'Nigeria', 'Egipto', 'Turquía']),
  educacion: z.enum(['Ingeniero de Sistemas', 'Analista de Sistemas', 'Ingeniero en Computación', 'Ingeniero Informático', 'Desarrollador Backend', 'Desarrollador Frontend', 'Desarrollador Fullstack', 'DevOps'], { message: 'Educación es requerida' }),
  cargo: z.enum(['Desarrollador', 'Diseñador', 'Analista'], { message: 'Cargo es requerido' }),
  experiencia: z.enum(['Trainee', 'Semi-Senior', 'Senior'], { message: 'Experiencia es requerida' }),
  password: z.string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
    .max(20, { message: "La contraseña no puede tener más de 20 caracteres" })
    .regex(/[A-Z]/, { message: "Debe contener al menos una letra mayúscula" })
    .regex(/[a-z]/, { message: "Debe contener al menos una letra minúscula" })
    .regex(/[0-9]/, { message: "Debe contener al menos un número" })
    .regex(/[@$!%*?&#]/, { message: "Debe contener al menos un carácter especial" })
});

// Esquema parcial para actualizaciones (PATCH)
export const usuarioPartialSchema = usuarioSchema.partial(); // Hacer que todos los campos sean opcionales?
