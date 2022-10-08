//importar la conexion
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const UserModel = db.define('users', {
    usuario: { type: DataTypes.STRING },
    contrasena: { type: DataTypes.STRING }
})

export default UserModel