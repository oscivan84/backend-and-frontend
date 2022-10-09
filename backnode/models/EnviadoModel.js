//importar la conexion
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const EnviadoModel = db.define('enviados', {
    id_cliente: { type: DataTypes.INTEGER },
    mensaje: { type: DataTypes.STRING },
    fecha: { type: DataTypes.STRING },
    estado: { type: DataTypes.STRING }
})

export default EnviadoModel