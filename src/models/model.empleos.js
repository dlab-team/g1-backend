import data from './querys.js'

export const todosEmpleos = async (id) => {
    try {
        const consulta ='SELECT * FROM empleos WHERE usuario_id = $1;'
        const values = [id]
       return await data(consulta, values)
    } catch (error) {
        return error
    }
}

export const empleoById = async (id) => {
    try {
        const consulta ='SELECT * FROM empleos WHERE id = $1;'
        const values = [id]
       return await data(consulta, values)
    } catch (error) {
        return error
    }
}