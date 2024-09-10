import data from './query.js'
import crypto from 'crypto'

// devuelve todos los empleos
export const todosEmpleos = async () => {
    try {
        const consulta ='SELECT * FROM empleos;'
        const values = [id]
       return await data(consulta, values)
    } catch (error) {
        return error
    }
}
export const empleosPorUsuario = async (id) => {
    try {
        const consulta ='SELECT * FROM empleos WHERE usuario_id = $1;'
        const values = [id]
       return await data(consulta, values)
    } catch (error) {
        return error
    }
}


// devuelve empleo por id
export const empleoById = async (id) => {
    try {
        const consulta ='SELECT * FROM empleos WHERE id = $1;'
        const values = [id]
       return await data(consulta, values)
    } catch (error) {
        return error
    }
}

// inserta empleo
export const insertEmpleo = async (data) => {
    const { cargo, descripcion, ubicacion, modalidad, salario, nombreEmpresa, listaId, usuarioId } = data
    const id = crypto.randomUUID()
    try {
        const consulta ='INSERT INTO empleos (id, cargo, descripcion, ubicacion, modalidad, salario, nombre_empresa, lista_id, usuario_id);'
        const values = [id, cargo, descripcion, ubicacion, modalidad, salario, nombreEmpresa, creadoEn, listaId, usuarioId]
       return await data(consulta, values)
    } catch (error) {
        return error
    }
}

// borra empleo por id
export const deleteEmpleo = async (id) => {
    try {
        const consulta ='DELETE from empleos WHERE id = $1;'
        const values = [id]
       return await data(consulta, values)
    } catch (error) {
        return error
    }
}