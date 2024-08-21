import empresasModels from "../models/empresas.models";


//GET

export const getEmpresas = async (req, res) => {
    try {
        const empresas = await empresasModels.createEmpresa()
        res.status(200).json(empresas)
    } catch (error) {
        console.error(err)
        res.status(500).json({error: "Error al obtener las empresas"})
    }
}
//POST

export const postEmpresas = async (req, res) => {
    // console.log(req.body)
    try {
        
    } catch (error) {
        
    }
}

//PUT

export const putEmpresas = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

//DELETE

export const deleteEmpresas = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}