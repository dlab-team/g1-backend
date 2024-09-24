import data from './query.js'

// tomar email y nombre del usuario
export const getUserData = async (email) =>{
    try {
        const consulta = 'SELECT email, nombre, apellido FROM usuarios WHERE email = $1;'
        const values = [email]
        const result = await data(consulta,values)

        if (result.rows.length === 0){
            return null
        }

        return result.rows[0]
    } catch (error) {
        throw new Error("Error al obtener datos del usuario: ${error.messsage}")
    }
}