import express from "express";
import cors from 'cors';
//importar la conexion a la bd
import db from "./database/db.js";
//importar el enrutador
import clientRoutes from './routes/ClientRoutes.js'
import userRoutes from './routes/UserRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/clients', clientRoutes)
app.use('/users', userRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la BD')
} catch (error) {
    console.log(`El error de conexion es: ${error}` )
}

app.get('/', (req,res) =>{
    res.send('HOLA MUNDO')
})

app.listen(8000, () => {
    console.log('Servidor Corriendo en http://localhost:8000/')
})
