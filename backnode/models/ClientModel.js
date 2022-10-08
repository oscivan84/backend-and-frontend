//importar la conexion
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const ClientModel = db.define('clientes', {
    nombre: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
    celular: { type: DataTypes.BIGINT }
})

export default ClientModel
