import data from './querys.js'

export const todosObjetivos = async () => {
    try {
        const consulta ='SELECT * FROM objetivos'
       return await data(consulta)
    } catch (error) {
        return error
    }
}

export const todosParticipantesPorObjetivo = async (id) => {
    try {
        const consulta ='SELECT * FROM participantes WHERE objetivo_id = $1;'
        const values = [id]
       return await data(consulta, values)
    } catch (error) {
        return error
    }
}

export const insertObjetivo = async (data) => {
    const { nombre, intrucciones, descripcion, tipo, cumplimiento, fecha, estado, plazo } = data
    try {
        const consulta ='INSERT INTO objetivos (nombre, intrucciones, descripcion, tipo, cumplimiento, fecha_creacion, estado, plazo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);'
        const values = [nombre, intrucciones, descripcion, tipo, cumplimiento, fecha, estado, plazo]
       return await data(consulta, values)
    } catch (error) {
        return error
    }
}

export const borrarObjetivo = async (id) => {
try {
    const consulta = 'DELETE from objetivos WHERE id = $1;'
    const values = [id]
    return await data(consulta, values)
} catch (error) {
    return error
}
    
}
export const cambiarEstadoObjetivo = async (id) => {
    try {
        const consulta = 'UPDATE objetivos SET estado = $1  WHERE id = $2;'
        const values = [estado, id]
        return await data(consulta, values)
    } catch (error) {
        return error
    }
        
    }