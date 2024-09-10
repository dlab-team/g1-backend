import { z } from 'zod';

export const contraseñaSchema = z.string()
.min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
.max(20, "La contraseña no puede tener más de 20 caracteres")
.regex(/[A-Z]/, { message: "Debe contener al menos una letra mayúscula" })
.regex(/[a-z]/, { message: "Debe contener al menos una letra minúscula" })
.regex(/[0-9]/, { message: "Debe contener al menos un número" })


// Esquema para la creación de usuarios a conversar
export const usuarioSchema = z.object({
  firstName: z.string().min(1, { message: 'Nombre es requerido' }),
  lastName: z.string().min(1, { message: 'Apellido es requerido' }),
  email: z.string().email({ message: 'Correo no es válido' }),
  country: z.enum(['Argentina', 'Venezuela', 'México', 'Chile', 'Perú', 'Bolivia', 'Paraguay', 'España', 'Colombia', 'Otro', 'Chile', 'Uruguay']),
  education: z.enum(['Ingeniero de Sistemas', 'Analista de Sistemas', 'Ingeniero en Computación', 'Ingeniero Informático', 'Desarrollador Backend', 'Desarrollador Frontend', 'Desarrollador Fullstack', 'DevOps'], { message: 'Educación es requerida' }),
  jobTitle: z.enum(['Desarrollador', 'Diseñador', 'Analista'], { message: 'Cargo es requerido' }),
  experience: z.enum(['Trainee', 'Semi-Senior', 'Senior', 'Sin Experiencia'], { message: 'Experiencia es requerida' }),
  password: contraseñaSchema
})
   

 export function validateUsuario (input) {
    return usuarioSchema.safeParse(input)

 }




