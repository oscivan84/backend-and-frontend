import React from 'react';


const EnviarMasivo = () => {
    return (
        <div>

            <div class="mb-3 row">
                <div className='col-2'>
                    <br></br>
                    <label for="" class="form-label"><b>Buscar por fecha</b></label>
                </div>
                <div className='col-2'>
                    <br></br>
                    <input type="text"
                        class="form-control" name="" id="" aria-describedby="helpId" placeholder="Dia/Mes/Año" />
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-primary">
                    <thead>
                        <tr>
                        <th scope="col">Fecha</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Seleccionar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="">

                            <td>15/06/2022</td>
                            <td>Jaime Pruebas</td>
                            <td><input class="form-check-input" type="checkbox" value="" id="" /></td>
                        </tr>
                        <tr className="colspan-2">
                            <td><div class="mb-3">
                                <label for="" class="form-label">Ingrese mensaje</label>
                                <textarea class="form-control" name="" id="" rows="3"></textarea>
                            </div></td>
                            <td scope="row"><tr></tr><button type="button" className="btn btn-primary">Enviar</button></td>
                        
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    )
}
export default EnviarMasivo;