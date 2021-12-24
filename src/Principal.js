import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

import img101 from './img/logo-empresa-almacen.png';
import Productos from "./Productos";
import Almacen from "./Almacen";

function Principal() {

    const [styleActiveA, setStyleActiveA] = useState("");
    const [styleActiveB, setStyleActiveB] = useState("");
    const [styleActiveC, setStyleActiveC] = useState("");
    const [styleActiveD, setStyleActiveD] = useState("");
    const [styleActiveE, setStyleActiveE] = useState("");
    const [styleActiveF, setStyleActiveF] = useState("");
    const [styleActiveG, setStyleActiveG] = useState("");
    const [styleActiveX, setStyleActiveX] = useState("active");

    const [styleviewA, setStyleviewA] = useState("div-off");
    const [styleviewB, setStyleviewB] = useState("div-off");
    const [styleviewC, setStyleviewC] = useState("div-off");
    const [styleviewD, setStyleviewD] = useState("div-off");
    const [styleviewE, setStyleviewE] = useState("div-off");
    const [styleviewF, setStyleviewF] = useState("div-off");
    const [styleviewG, setStyleviewG] = useState("div-off");
    const [styleviewX, setStyleviewX] = useState("div-on");


    const changeStyleActiveA = () => {
        console.log("menu-action-Active-A");

        setStyleviewA("div-on");
        setStyleviewB("div-off");
        setStyleviewC("div-off");
        setStyleviewD("div-off");
        setStyleviewE("div-off");
        setStyleviewF("div-off");
        setStyleviewG("div-off");
        setStyleviewX("div-off");

        setStyleActiveA("active");
        setStyleActiveB("");
        setStyleActiveC("");
        setStyleActiveD("");
        setStyleActiveE("");
        setStyleActiveF("");
        setStyleActiveG("");
        setStyleActiveX("");
    };

    const changeStyleActiveB = () => {
        console.log("menu-action-Active-B");

        setStyleviewA("div-off");
        setStyleviewB("div-on");
        setStyleviewC("div-off");
        setStyleviewD("div-off");
        setStyleviewE("div-off");
        setStyleviewF("div-off");
        setStyleviewG("div-off");
        setStyleviewX("div-off");

        setStyleActiveA("");
        setStyleActiveB("active");
        setStyleActiveC("");
        setStyleActiveD("");
        setStyleActiveE("");
        setStyleActiveF("");
        setStyleActiveG("");
        setStyleActiveX("");
    };

    const changeStyleActiveC = () => {
        console.log("menu-action-Active-C");

        setStyleviewA("div-off");
        setStyleviewB("div-off");
        setStyleviewC("div-on");
        setStyleviewD("div-off");
        setStyleviewE("div-off");
        setStyleviewF("div-off");
        setStyleviewG("div-off");
        setStyleviewX("div-off");

        setStyleActiveA("");
        setStyleActiveB("");
        setStyleActiveC("active");
        setStyleActiveD("");
        setStyleActiveE("");
        setStyleActiveF("");
        setStyleActiveG("");
        setStyleActiveX("");
    };

    const changeStyleActiveD = () => {
        console.log("menu-action-Active-D");

        setStyleviewA("div-off");
        setStyleviewB("div-off");
        setStyleviewC("div-off");
        setStyleviewD("div-on");
        setStyleviewE("div-off");
        setStyleviewF("div-off");
        setStyleviewG("div-off");
        setStyleviewX("div-off");

        setStyleActiveA("");
        setStyleActiveB("");
        setStyleActiveC("");
        setStyleActiveD("active");
        setStyleActiveE("");
        setStyleActiveF("");
        setStyleActiveG("");
        setStyleActiveX("");
    };

    const changeStyleActiveE = () => {
        console.log("menu-action-Active-E");

        setStyleviewA("div-off");
        setStyleviewB("div-off");
        setStyleviewC("div-off");
        setStyleviewD("div-off");
        setStyleviewE("div-on");
        setStyleviewF("div-off");
        setStyleviewG("div-off");
        setStyleviewX("div-off");

        setStyleActiveA("");
        setStyleActiveB("");
        setStyleActiveC("");
        setStyleActiveD("");
        setStyleActiveE("active");
        setStyleActiveF("");
        setStyleActiveG("");
        setStyleActiveX("");
    };

    const changeStyleActiveF = () => {
        console.log("menu-action-Active-F");

        setStyleviewA("div-off");
        setStyleviewB("div-off");
        setStyleviewC("div-off");
        setStyleviewD("div-off");
        setStyleviewE("div-off");
        setStyleviewF("div-on");
        setStyleviewG("div-off");
        setStyleviewX("div-off");

        setStyleActiveA("");
        setStyleActiveB("");
        setStyleActiveC("");
        setStyleActiveD("");
        setStyleActiveE("");
        setStyleActiveF("active");
        setStyleActiveG("");
        setStyleActiveX("");
    };

    const changeStyleActiveG = () => {
        console.log("menu-action-Active-G");

        setStyleviewA("div-off");
        setStyleviewB("div-off");
        setStyleviewC("div-off");
        setStyleviewD("div-off");
        setStyleviewE("div-off");
        setStyleviewF("div-off");
        setStyleviewG("div-on");
        setStyleviewX("div-off");

        setStyleActiveA("");
        setStyleActiveB("");
        setStyleActiveC("");
        setStyleActiveD("");
        setStyleActiveE("");
        setStyleActiveF("");
        setStyleActiveG("active");
        setStyleActiveX("");
    };

    const changeStyleActiveX = () => {
        console.log("menu-action-Active-X");

        setStyleviewA("div-off");
        setStyleviewB("div-off");
        setStyleviewC("div-off");
        setStyleviewD("div-off");
        setStyleviewE("div-off");
        setStyleviewF("div-off");
        setStyleviewG("div-off");
        setStyleviewX("div-on");

        setStyleActiveA("");
        setStyleActiveB("");
        setStyleActiveC("");
        setStyleActiveD("");
        setStyleActiveE("");
        setStyleActiveF("");
        setStyleActiveG("");
        setStyleActiveX("active");
    };

    return (

        <div className="App">
            {/*
            <div className="background-image background-image-prin background-image-prin-almacen">
            </div>
            */}

            <div className="navigation">
                <ul className="ul-menu">
                    <div className="logo-nav">
                        <img src={img101} className="img-logo-nav"/>
                    </div>
                    <li className={styleActiveX + " list list-pad"}>
                        <a href="#" onClick={changeStyleActiveX}>
                            <span className="icon"><ion-icon name="layers-outline"></ion-icon></span>
                            <span className="title">Principal</span>
                        </a>
                    </li>
                    <li className={styleActiveA + " list"}>
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
                        <a href="/" onClick={changeStyleActiveG}>
                            <span className="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                            <span className="title">Salir</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styleviewX}>
                <Productos/>
                <Almacen/>
            </div>

            <div className={styleviewA}>
                <Productos/>
            </div>
            <div className={styleviewB}>
                <Almacen/>
            </div>
            <div className={styleviewC}>
                C
            </div>
            <div className={styleviewD}>
                D
            </div>
            <div className={styleviewE}>
                E
            </div>
            <div className={styleviewF}>
                F
            </div>
            <div className={styleviewG}>
                G
            </div>

        </div>


    );
}


export default Principal;