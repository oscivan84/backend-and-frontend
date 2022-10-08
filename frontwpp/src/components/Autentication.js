import axios from "axios"
import React,{ useState, useEffect } from "react"
import Register from "./autentication/Register";



const Autentication = () => {

    //modal Register
    const [register, setRegister] = useState(false);
    const closeRegister = () => setRegister(false);
    const showRegister = () => setRegister(true);

    return(
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                    <button className='btn btn-primary mt-2 mb-2' onClick={showRegister}>Registrarme</button>
                    </div>
                </div>
            </div>
            <Register show={register} handleClose={closeRegister} />
        </>
    )
}

export default Autentication