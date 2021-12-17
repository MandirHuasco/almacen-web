import React, {useRef, useState} from "react";
import {faTicketAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Badge, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

import img101 from './img/logo-empresa-almacen.png';

const ticket = <FontAwesomeIcon icon={faTicketAlt} />;

function Principal() {




    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_101, setModal_101] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_102, setModal_102] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_103, setModal_103] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_104, setModal_104] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_105, setModal_105] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_106, setModal_106] = useState(false);

    const toggle_101 = () => setModal_101(!modal_101);
    const toggle_102 = () => setModal_102(!modal_102);
    const toggle_103 = () => setModal_103(!modal_103);
    const toggle_104 = () => setModal_104(!modal_104);
    const toggle_105 = () => setModal_105(!modal_105);
    const toggle_106 = () => setModal_106(!modal_106);

    return (

        <div className="navigation">
            <ul className="ul-menu">
                <div className="logo-nav">
                    <img src={img101} className="img-logo-nav"/>
                </div>
                <li className="list active">
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