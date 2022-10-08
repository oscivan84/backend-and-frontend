import axios from "axios";
import React,{ useState, useEffect } from "react"; //hugs
import { Link } from "react-router-dom";
import ModalClientAdd from "./client/ClientAdd";
import ClientEdit from "./client/ClientEdit";

const URI = 'http://localhost:8000/clients/';


const CompShowClients = () => {

    //modal ClientAdd
    const [clientAdd, setClientAdd] = useState(false);
    const closeClientAdd = () => setClientAdd(false);
    const showClientAdd = () => setClientAdd(true);
    
    
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

    //procedimiento para eliminar
    const deleteClient = async (id) => {
       const res = await axios.delete(`${URI}${id}`)
        getClients()
        alert(res.data.message)
    }

    

    return(
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        {/* <Link to='/create' className='btn btn-primary mt-2 mb-2' ><i class="fa-solid fa-user-plus"></i></Link> */}
                        <button className='btn btn-primary mt-2 mb-2' onClick={showClientAdd}><i className="fa-solid fa-user-plus"></i></button>
                        <table className='table'>
                            <thead className='table-primary'>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Celular</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clients.map ( (client) => (
                                    <tr key={ client.id }>
                                    <ClientEdit client={client} deleteClient={deleteClient} getClients={getClients} />                                            
                                    </tr>
                                )) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ModalClientAdd show={clientAdd} handleClose={closeClientAdd} getClients={getClients} />        
        </>
    )
}

export default CompShowClients