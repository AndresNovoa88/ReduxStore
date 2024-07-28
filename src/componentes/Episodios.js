import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import '../App.css';

const Episodios = () => {
    const c = useSelector(state => state.holaAPP.incrementar);
    const first = useSelector(state => state.holaAPP.episodios);
    const imagen = useSelector(state => state.holaAPP.imagen);
    const nombre = useSelector(state => state.holaAPP.nombre);

    return (
        <div align="center">
            <h2 className="tituloPrincipal">Episodios del personaje</h2>
            <div className="formal-style">
                <h2>Me encuentro en los siguientes episodios - {c}</h2>
                {imagen && <img src={imagen} alt="Personaje" className="personaje-imagen" />}
                <h3>{nombre}</h3>
                <Table striped bordered hover variant>
                    <thead>
                    <tr align="center">
                        <th>Episodios</th>
                    </tr>
                    </thead>
                    <tbody>
                    {first.map((e, i) => (
                        <tr key={i}>
                            <td><span className="tamlet">{e}</span></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Episodios;
