import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

import img101 from './img/logo-empresa-almacen.png';

function Principal() {

    return (

        <div className="navigation">
            <ul className="ul-menu">
                <div className="logo-nav">
                    <img src={img101} className="img-logo-nav"/>
                </div>
                <li className="list active list-pad">
                    <a href="#">
                        <span className="icon"><ion-icon name="cube-outline"></ion-icon></span>
                        <span className="title">Productos</span>
                    </a>
                </li>
                <li className="list">
                    <a href="#">
                        <span className="icon"><ion-icon name="grid-outline"></ion-icon></span>
                        <span className="title">Almacen</span>
                    </a>
                </li>
                <li className="list">
                    <a href="#">
                        <span className="icon"><ion-icon name="newspaper-outline"></ion-icon></span>
                        <span className="title">Reportes</span>
                    </a>
                </li>
                <li className="list">
                    <a href="#">
                        <span className="icon"><ion-icon name="people-circle-outline"></ion-icon></span>
                        <span className="title">Usuarios</span>
                    </a>
                </li>
                <li className="list">
                    <a href="#">
                        <span className="icon"><ion-icon name="settings-outline"></ion-icon></span>
                        <span className="title">Configuración</span>
                    </a>
                </li>
                <li className="list">
                    <a href="#">
                        <span className="icon"><ion-icon name="help-outline"></ion-icon></span>
                        <span className="title">Ayuda</span>
                    </a>
                </li>
                <li className="list Sign-off">
                    <a href="#">
                        <span className="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                        <span className="title">Salir</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}
const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) => item.addEventListener('click',activeLink));


export default Principal;