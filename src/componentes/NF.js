import '../App.css';
import {Link} from "react-router-dom";

function NF() {
    return (
        <div className="tituloPrincipal">
            <h1 className="titulo"> PAGINA NO ENCONTRADA</h1>
            <Link to="/"> Volver a pagina principal</Link>
        </div>
    );
}

export default NF;