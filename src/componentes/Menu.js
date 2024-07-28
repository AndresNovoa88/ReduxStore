import {NavLink} from "react-router-dom";


function Menu() {
    return (
        <nav>
            <NavLink className={({isActive}) => (isActive ? "activo" : null)} to="/App">Pagina principal</NavLink>
            <NavLink className={({isActive}) => (isActive ? "activo" : null)} to="/Episodios">Episodios</NavLink>
            <NavLink className={({isActive}) => (isActive ? "activo" : null)} to="/Informacion">Informacion</NavLink>
        </nav>
    );
}

export default Menu;