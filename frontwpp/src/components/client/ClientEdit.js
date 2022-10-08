import axios from "axios";
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const URI = 'http://localhost:8000/clients/';

const ClientEdit = ({client,deleteClient, getClients}) => { 

    //modal ClientEdit
    const [clientEdit, setClientEdit] = useState(false);
    const closeClientEdit = () => setClientEdit(false);
    const showClientEdit = () => setClientEdit(true);
    
    const id = client.id

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cell, setCell] = useState('')

    const update = async (e) => {
        e.preventDefault()

        const res = await axios.put(URI+id, {
            nombre:name,
            correo:email,
            celular:cell
        })
        getClients()
        closeClientEdit()
        alert(res.data.message)
        //iria actualizar y cerrar la modal
    }

    useEffect( () => {
        getClientById()
    }, [])

    const getClientById = async () => {
        setName(client.nombre)
        setEmail(client.correo)
        setCell(client.celular)
    }

  
  

    return(
        <>
            <td> { client.nombre } </td>
            <td> { client.correo } </td>
            <td> { client.celular } </td>
            <td>
                <button className='btn btn-primary btn-sm'  onClick={showClientEdit}><i className="fa-solid fa-user-pen"></i></button>{'  '}
                <button onClick={ ()=>deleteClient(client.id) } className='btn btn-danger btn-sm'><i className="fa-solid fa-user-minus"></i></button>
            </td>
            <Modal show={clientEdit} onHide={closeClientEdit}>
                <Modal.Header closeButton>
                <Modal.Title>Editar Cliente {client.nombre}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={update}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <input value={name} onChange={(e)=> setName(e.target.value)} type='text' className='form-control'></input>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <input value={email} onChange={(e)=> setEmail(e.target.value)} type='email' className='form-control'></input>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCel">
                            <Form.Label>celular</Form.Label>
                            <input value={cell} onChange={(e)=> setCell(e.target.value)} type='number' className='form-control'></input>
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={closeClientEdit}>
                                Close
                            </Button>
                            <button type='submit' className='btn btn-primary'>Guardar</button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
};

export default ClientEdit