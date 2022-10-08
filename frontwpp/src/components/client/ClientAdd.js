import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/clients/';

const ModalClientAdd = ({show, handleClose, getClients}) => {   
  
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cell, setCell] = useState('')
    const navigate = useNavigate()

    //Procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        const res = await axios.post(URI,{nombre:name, correo:email, celular:cell})
        getClients()
        handleClose()
        alert(res.data.message)
    }

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Registrar Cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={store}>
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
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <button type='submit' className='btn btn-primary'>Guardar</button>
                    </Modal.Footer>
                </form>
            </Modal.Body>            
        </Modal>
    )
};

export default ModalClientAdd