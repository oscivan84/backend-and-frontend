//importar el modelo
import EnviadoModel from "../models/EnviadoModel.js";

//** metodos para el crud **/

//Mostrar todos los registros
export const getAllEnviados = async (req, res) => {
    try {
        const enviados = await EnviadoModel.findAll()
        res.json(enviados)
    } catch (error) {
        res.json( {message: error.message} )
    }
}