import { z } from 'zod'


export const usuarioSchema = z.object({
    nombre: z.string({
     invalid_type_error: 'Nombre no es valido',
     required_error: 'Nombre es requerido',
    }),
    apellido: z.string({
     invalid_type_error: 'Apellido no es valido',
     required_error: 'Apellido es requerido',
    }),
    correo: z.string().email(),
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
    'Tecnico Superior'
    ]),
    cargo: z.enum([
    'Full Stack'
    ]),
    experiencia: z.enum([
    'Un Año'
    ]),
    contraseña: z.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(20, "La contraseña no puede tener más de 20 caracteres")
    .regex(/[A-Z]/, "La contraseña debe contener al menos una letra mayúscula")
    .regex(/[a-z]/, "La contraseña debe contener al menos una letra minúscula")
    .regex(/[0-9]/, "La contraseña debe contener al menos un número")
    .regex(/[@$!%*?&#]/, "La contraseña debe contener al menos un carácter especial")
 })

 function validateUsuario (input) {
    return usuarioSchema.safeParse(input)

 }