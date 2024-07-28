import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Alert} from 'react-bootstrap';
import { setIncremental } from '../reducers';
import '../App.css';

const InfoPer = () => {
    const dispatch = useDispatch();
    const val = useSelector(state => state.holaAPP.incrementar);
    const infoPer = useSelector(state => state.holaAPP.informacion);
    const imagen = useSelector(state => state.holaAPP.imagen);
    const nombre = useSelector(state => state.holaAPP.nombre);
    const [vista , setVista] = useState(true);

    return (
        <div align="center">
            <h2 className="tituloPrincipal">Información del personaje</h2>
            <h1>{val}</h1>
            {imagen && <img src={imagen} alt="Personaje" className="personaje-imagen" />}
            <h3>{nombre}</h3>

            <Alert show={vista} variant="success">
            <Alert.Heading>
                Datos del personaje
            </Alert.Heading>
                <p>
                    <span className="tamlet">{infoPer}</span>
                </p>
                <hr/>
                <p className="mb-0">
                    El personaje es: {nombre}
                </p>
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setVista(false)} variant="outline-success">
                        Salir
                    </Button>
                </div>
            </Alert>
            {!vista &&   <Button onClick={() => setVista(true)} variant="outline-success">
                Ver Alert
            </Button>}

            <Button onClick={() => dispatch(setIncremental(1))}>+1</Button>
        </div>
    );
}

export default InfoPer;