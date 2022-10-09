import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css"
const Menu = () => {
    return (
        <div className=" row ">
            <div className=" col-2">
                <div className="col-12 FormatoMenu">
                    <div className="border border-light border-3 rounded-pill">
                        <b><Link to="/listaClientes">Listado Clientes</Link></b>
                    </div>
                    <div className="border border-light border-3 rounded-pill">
                        <b><Link to="/ControlEnviados">Control Enviados</Link></b>
                    </div>
                    <div className="border border-light border-3 rounded-pill">
                        <b><Link to="/">Registro Usuarios</Link></b>
                    </div>

                </div>
            </div>
            <div className="col-10"><Outlet /></div>

        </div>
    )
}
export default Menu;
