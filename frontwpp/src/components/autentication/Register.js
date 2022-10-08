import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const URI = 'http://localhost:8000/users/';

const Register = ({show,handleClose}) => {

    // const [user, setUser] = useState('')
    // const [pass, setPass] = useState('')

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Registrar Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <form onSubmit={}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre</Form.Label>
                        <input value={name} onChange={(e)=> setUser(e.target.value)} type='text' className='form-control'></input>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <input value={email} onChange={(e)=> setPass(e.target.value)} type='email' className='form-control'></input>
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <button type='submit' className='btn btn-primary'>Guardar</button>
                    </Modal.Footer>
                </form> */}
            </Modal.Body>            
        </Modal>
    )

}

export default Register