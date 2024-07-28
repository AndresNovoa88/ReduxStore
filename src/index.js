import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import {Provider} from "react-redux";
import store from "./store";
import Principal from "./Principal";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container } from 'react-bootstrap';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Principal/>
    </Provider>
);