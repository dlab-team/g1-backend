import data from './querys.js'

export const experienciaPorUsuario = async (id) => {
    try {
        const consulta ='SELECT * FROM experiencia WHERE usuario_id = $1;'
        const values = [id]
       return await data(consulta, values)
    } catch (error) {
        return error
    }
}