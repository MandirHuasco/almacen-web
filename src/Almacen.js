import React, {useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import TableProductosActive from "./Vistas/TableProdActive";
import AlmacenPrin from "./Vistas/AlmacenPrin";

function Almacen() {

    const [styleAlm, setStyleAlm] = useState("");

    const [styleAlma, setStyleAlma] = useState("table-off");
    const [styleAlmA, setStyleAlmA] = useState("");

    const [styleAlmb, setStyleAlmb] = useState("table-off");
    const [styleAlmB, setStyleAlmB] = useState("");

    const [styleAlmx, setStyleAlmx] = useState("table-off");

    const changeStyleAlmA = () => {
        console.log("menu-action-Alm-A");

        setStyleAlm("pading-card-active");

        setStyleAlmA("nav-border-bottom-active");
        setStyleAlma("table-on");

        setStyleAlmB("");
        setStyleAlmb("table-off");

        setStyleAlmx("table-on");
    };

    const changeStyleAlmB = () => {
        console.log("menu-action-Alm-A");

        setStyleAlm("pading-card-active");

        setStyleAlmA("");
        setStyleAlma("table-off");

        setStyleAlmB("nav-border-bottom-active");
        setStyleAlmb("table-on");

        setStyleAlmx("table-on");
    };

    const changeStyleAlmX = () => {
        console.log("menu-action-Alm-x");

        setStyleAlm("");

        setStyleAlmA("");
        setStyleAlma("table-off");

        setStyleAlmB("");
        setStyleAlmb("table-off");

        setStyleAlmx("table-off");
    };


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_103, setModal_103] = useState(false);
    const toggle_103 = () => setModal_103(!modal_103);

    return(
        <div className="cont-prod-prin">
            <div className="cont-prin">
                <div className="header-prod-prin">
                    <div className="title-head-prod">
                        <h2 className="title-prod"><span className="icon icon-prod"><ion-icon name="grid-outline"></ion-icon></span>ALMACEN</h2>
                    </div>
                    <div className="cont-buttons-prod">
                        <button type="button" onClick={() => toggle_103()} className="btn btn-color-principal" ><span className="icon-boton"><ion-icon name="add-circle-outline"></ion-icon></span>Agregar</button>

                        <Modal isOpen={modal_103} toggle={toggle_103}>
                            <ModalHeader toggle={toggle_103}>
                                <p className="p-modal p-modal-prod">NUEVO <span className="span-modal span-modal-prod">ALMACEN</span>.</p>
                            </ModalHeader>
                            <ModalBody>
                                <form action="">
                                    <div className="cont-form-modal">
                                        <div className="cont-form-modal-alm">
                                            <div className="form-group">
                                                <label htmlFor="prod-name">Ingrese producto</label>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="cube-outline"></ion-icon></span>Descripción</span>
                                                    </div>
                                                    <input type="text" id="prod-name" className="form-control" placeholder="Nombre producto" aria-label="Username" aria-describedby="basic-addon1"/>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                {/*<label htmlFor="prod-marca">Marca</label>*/}
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="scan-outline"></ion-icon></span>Marca</span>
                                                    </div>
                                                    <input type="text" id="prod-marca" className="form-control" placeholder="DELL, CANON, IBM, ..." aria-label="Username" aria-describedby="basic-addon1"/>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-color-principal btn-modal-prod"><span className="icon-boton"><ion-icon name="save-outline"></ion-icon></span> GUARDAR</button>
                                        </div>
                                    </div>
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <p className="p-modal p-modal-footer"><span className="span-modal span-footer">Desarrollado por N&W Seguridad Total</span></p>
                            </ModalFooter>
                        </Modal>

                        <button type="button" className="btn btn-color-principal"><span className="icon-boton"><ion-icon name="moon-outline"></ion-icon></span>Modo Oscuro</button>
                    </div>
                </div>

                <div className={styleAlm + " body-prod-prin"}>
                    <nav className="nav-cont">
                        <div className="icon-nav">
                                <span className="icon icon-prod-nav-prin">
                                    <ion-icon name="git-merge-outline"></ion-icon>
                                </span><h3 className="h3-nav-icon">ALMACENAMIENTO</h3>
                        </div>
                        <ul className="nav-ul">
                            <li className="nav-li">
                                <a className={styleAlmA + " nav-link"} href="#" onClick={changeStyleAlmA}><span className="icon icon-prod-nav"><ion-icon name="apps-outline"></ion-icon></span>Almacenes</a>
                            </li>
                            <li className="nav-li">
                                <a className={styleAlmB + " nav-link"} href="#" onClick={changeStyleAlmB}><span className="icon icon-prod-nav"><ion-icon name="close-circle-outline"></ion-icon></span>Inactivos</a>
                            </li>
                            <li className={styleAlmx + " nav-li"}>
                                <a className=" nav-link" href="#" onClick={changeStyleAlmX}><span className="icon icon-prod-nav"><ion-icon name="close-outline"></ion-icon></span>Cerrar</a>
                            </li>
                        </ul>
                        <div className="cont-search">
                            <input className="form-control inputBuscar" placeholder="Búscar..."/>
                            <button className="btn bg-almacen color-white">
                                <FontAwesomeIcon icon={faSearch}/>
                            </button>
                        </div>
                    </nav>

                    <div id="item-table-01" className={styleAlma}>
                        <AlmacenPrin/>
                    </div>
                    <div id="item-table-01" className={styleAlmb}>
                        <TableProductosActive/>
                    </div>

                </div>

                <div className="footer-prod-prin">

                </div>

            </div>
        </div>
    )
}
export default Almacen;