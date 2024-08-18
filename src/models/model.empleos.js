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

export const insertEmpleo = async (data) => {
    const { id, cargo, descripcion, ubicacion, modalidad, salario, nombreEmpresa, creadoEn, listaId, usuarioId } = data
    try {
        const consulta ='INSERT INTO empleos (id, cargo, descripcion, ubicacion, modalidad, salario, nombre_empresa, creado_en, lista_id, usuario_id);'
        const values = [id, cargo, descripcion, ubicacion, modalidad, salario, nombreEmpresa, creadoEn, listaId, usuarioId]
       return await data(consulta, values)
    } catch (error) {
        return error
    }
}