import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import Episodios from "./componentes/Episodios";
import Infoper from "./componentes/Infoper";
import NF from "./componentes/NF";
import Menu from "./componentes/Menu";

function Principal() {
    return (
        <BrowserRouter>
            <Menu/>
        <Routes>
            <Route path = "/"   element={<App/>}/>
            <Route path = "/App"   element={<App/>}/>
            <Route path = "/Episodios"   element={<Episodios/>}/>
            <Route path = "/Informacion"   element={<Infoper/>}/>
            <Route path = "*"   element={<NF/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Principal;