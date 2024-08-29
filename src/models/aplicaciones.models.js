import data from './querys.js'

export const todosAplicacionesPorUsuario = async (id) => {
    try {
        const consulta ='SELECT * FROM aplicaciones WHERE usuario_id = $1;'
        const values = [id]
       return await data(consulta, values)
    } catch (error) {
        return error
    }
}

export const todosAplicacionesPorEmpleo = async (id) => {
    try {
        const consulta ='SELECT * FROM aplicaciones WHERE empleo_id = $1;'
        const values = [id]
       return await data(consulta, values)
    } catch (error) {
        return error
    }
}

export const insertAplicacion = async (data) => {
    const { id, empleoId, usuarioId, categoria, fechaAplicacion } = data
    try {
        const consulta ='INSERT INTO aplicaciones (id, empleo_id, usuario_id, categoría, fecha_aplicacion);'
        const values = [id, empleoId, usuarioId, categoria, fechaAplicacion]
       return await data(consulta, values)
    } catch (error) {
        return error
    }
}

export const borrarAplicacion = async (id) => {
try {
    const consulta = 'DELETE from aplicaciones WHERE id = $1;'
    const values = [id]
    return await data(consulta, values)
} catch (error) {
    
}
    
}
