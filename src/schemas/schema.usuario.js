import { z } from 'zod'


nombre, apellido, correo, pais, educacion, cargo, experiencia, contraseña

const movieSchema = object({
    nombre: string({
     invalid_type_error: 'Nombre no es valido',
     required_error: 'Nombre es requerido',
    }),
    apellido: string({
     invalid_type_error: 'Apellido no es valido',
     required_error: 'Apellido es requerido',
    }),
    correo: string().correo()({
      invalid_type_error: 'Nombre no es valido',
      required_error: 'Nombre es requerido',
    }),
    pais: z.enum([
    'Estados Unidos',
    'Canadá',
    'México',
    'Brasil',
    'Reino Unido',
    'Alemania',
    'Francia',
    'España',
    'Italia',
    'Australia',
    'India',
    'Japón',
    'Chile',
    'China',
    'Rusia',
    'Argentina',
    'Sudáfrica',
    'Nigeria',
    'Egipto',
    'Turquía'
    ]),
    educacion: z.enum([

    ]),
    cargo: z.enum([

    ]),
    experiencia: z.enum([

    ]),
    contraseña: z.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(20, "La contraseña no puede tener más de 20 caracteres")
    .regex(/[A-Z]/, "La contraseña debe contener al menos una letra mayúscula")
    .regex(/[a-z]/, "La contraseña debe contener al menos una letra minúscula")
    .regex(/[0-9]/, "La contraseña debe contener al menos un número")
    .regex(/[@$!%*?&#]/, "La contraseña debe contener al menos un carácter especial")
 })

 function validateMovie (input) {
    return movieSchema.safeParse(input)

 }
 function validatePartialMovie (input) {
   return movieSchema.partial().safeParse(input)
 }

export default {
   validateMovie,
   validatePartialMovie
}