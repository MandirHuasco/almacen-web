import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

import img101 from './img/logo-empresa-almacen.png';

function Principal() {

    const [styleActiveA, setStyleActiveA] = useState("");
    const [styleActiveB, setStyleActiveB] = useState("");
    const [styleActiveC, setStyleActiveC] = useState("");
    const [styleActiveD, setStyleActiveD] = useState("");
    const [styleActiveE, setStyleActiveE] = useState("");
    const [styleActiveF, setStyleActiveF] = useState("");
    const [styleActiveG, setStyleActiveG] = useState("");


    const changeStyleActiveA = () => {
        console.log("menu-action-Active-A");

        setStyleActiveA("active");
        setStyleActiveB("");
        setStyleActiveC("");
        setStyleActiveD("");
        setStyleActiveE("");
        setStyleActiveF("");
        setStyleActiveG("");
    };

    const changeStyleActiveB = () => {
        console.log("menu-action-Active-B");

        setStyleActiveA("");
        setStyleActiveB("active");
        setStyleActiveC("");
        setStyleActiveD("");
        setStyleActiveE("");
        setStyleActiveF("");
        setStyleActiveG("");
    };

    const changeStyleActiveC = () => {
        console.log("menu-action-Active-C");

        setStyleActiveA("");
        setStyleActiveB("");
        setStyleActiveC("active");
        setStyleActiveD("");
        setStyleActiveE("");
        setStyleActiveF("");
        setStyleActiveG("");
    };

    const changeStyleActiveD = () => {
        console.log("menu-action-Active-D");

        setStyleActiveA("");
        setStyleActiveB("");
        setStyleActiveC("");
        setStyleActiveD("active");
        setStyleActiveE("");
        setStyleActiveF("");
        setStyleActiveG("");
    };

    const changeStyleActiveE = () => {
        console.log("menu-action-Active-E");

        setStyleActiveA("");
        setStyleActiveB("");
        setStyleActiveC("");
        setStyleActiveD("");
        setStyleActiveE("active");
        setStyleActiveF("");
        setStyleActiveG("");
    };

    const changeStyleActiveF = () => {
        console.log("menu-action-Active-F");

        setStyleActiveA("");
        setStyleActiveB("");
        setStyleActiveC("");
        setStyleActiveD("");
        setStyleActiveE("");
        setStyleActiveF("active");
        setStyleActiveG("");
    };

    const changeStyleActiveG = () => {
        console.log("menu-action-Active-G");

        setStyleActiveA("");
        setStyleActiveB("");
        setStyleActiveC("");
        setStyleActiveD("");
        setStyleActiveE("");
        setStyleActiveF("");
        setStyleActiveG("active");
    };

    return (

        <div className="navigation">
            <ul className="ul-menu">
                <div className="logo-nav">
                    <img src={img101} className="img-logo-nav"/>
                </div>
                <li className={styleActiveA + " list list-pad"}>
                    <a href="#" onClick={changeStyleActiveA}>
                        <span className="icon"><ion-icon name="cube-outline"></ion-icon></span>
                        <span className="title">Productos</span>
                    </a>
                </li>
                <li className={styleActiveB + " list"}>
                    <a href="#" onClick={changeStyleActiveB}>
                        <span className="icon"><ion-icon name="grid-outline"></ion-icon></span>
                        <span className="title">Almacen</span>
                    </a>
                </li>
                <li className={styleActiveC + " list"}>
                    <a href="#" onClick={changeStyleActiveC}>
                        <span className="icon"><ion-icon name="newspaper-outline"></ion-icon></span>
                        <span className="title">Reportes</span>
                    </a>
                </li>
                <li className={styleActiveD + " list"}>
                    <a href="#" onClick={changeStyleActiveD}>
                        <span className="icon"><ion-icon name="people-circle-outline"></ion-icon></span>
                        <span className="title">Usuarios</span>
                    </a>
                </li>
                <li className={styleActiveE + " list"}>
                    <a href="#" onClick={changeStyleActiveE}>
                        <span className="icon"><ion-icon name="settings-outline"></ion-icon></span>
                        <span className="title">Configuración</span>
                    </a>
                </li>
                <li className={styleActiveF + " list"}>
                    <a href="#" onClick={changeStyleActiveF}>
                        <span className="icon"><ion-icon name="help-outline"></ion-icon></span>
                        <span className="title">Ayuda</span>
                    </a>
                </li>
                <li className={styleActiveG + " list Sign-off"}>
                    <a href="#" onClick={changeStyleActiveG}>
                        <span className="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                        <span className="title">Salir</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}


export default Principal;