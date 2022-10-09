import axios from "axios";
import React,{ useState, useEffect } from "react"; //hugs

const URI = 'http://localhost:8000/enviados/';


const ControlEnviados = () => {

    
    //configurar los hooks useState y useEffec
    const [clients, setClients] = useState([])
    useEffect( ()=>{
        getClients()
    }, [])


    //procedimiento para mostrar todos los clientes
    const getClients = async () => {
        const res = await axios.get(URI)
        setClients(res.data)
    }

    return(
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <table className='table'>
                            <thead className='table-primary'>
                                <tr>
                                    <th>id_cliente</th>
                                    <th>Fecha</th>
                                    <th>Mensaje</th>
                                    <th>Estado </th>

                                </tr>
                            </thead>
                            <tbody>
                                {clients.map ( (client) => (
                                    <tr key={ client.id }>
                                        <td>{client.id_cliente}</td>
                                        <td>{client.fecha}</td>
                                        <td>{client.mensaje}</td>          
                                        <td>{client.estado}</td>
                                      </tr>
                                )) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </>
    )
}

export default ControlEnviados