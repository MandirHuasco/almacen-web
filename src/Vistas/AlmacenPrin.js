import React, {useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import imgFileAlmacen from '../img/file-img-almacen.png';
import TableAlmacen from "./TableAlm";
import imgFile from "../img/file-img.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import TableProductosCatAlm from "./TableCatAlm";

function AlmacenPrin() {

    const [modal_105, setModal_105] = useState(false);
    const toggle_105 = () => setModal_105(!modal_105);

    const [styleCat, setStyleCat] = useState("table-off");
    const [styleCatSecond, setStyleCatSecond] = useState("");

    const [styleAlm, setStyleAlm] = useState("table-off");
    const [styleAlmSecond, setStyleAlmSecond] = useState("");

    const changeStyleCat = () => {
        console.log("action-cat-table");

        setStyleCat("table-on");
        setStyleCatSecond("div-off");
    };

    const changeStyleCatx = () => {
        console.log("action-cat-cerrar");

        setStyleCat("table-off");
        setStyleCatSecond("div-on-contents");
    };

    const changeStyleAlm = () => {
        console.log("action-cat-table");

        setStyleAlm("table-on");
        setStyleAlmSecond("div-off");
    };

    const changeStyleAlmx = () => {
        console.log("action-cat-cerrar");

        setStyleAlm("table-off");
        setStyleAlmSecond("div-on-contents");
    };

    const [styleOptions, setStyleOptions] = useState("div-off");
    const [styleOptionsButton, setStyleOptionsButton] = useState("div-on");

    const changeStyleOptions = () => {
        console.log("action-options");

        setStyleOptions("div-on");
        setStyleOptionsButton("div-off");
    };

    const changeStyleOptionsx = () => {
        console.log("action-options");

        setStyleOptions("div-off");
        setStyleOptionsButton("div-on");
    };

    const changeStyleOptionsDivx = () => {
        console.log("action-options");

        if(styleOptions === 'div-on'){
            setStyleOptions("div-off");
            setStyleOptionsButton("div-on");
        }
    };

    const [stylea, setStylea] = useState("table-on");
    const [styleA, setStyleA] = useState("nav-border-bottom-active");

    const [styleb, setStyleb] = useState("table-off");
    const [styleB, setStyleB] = useState("");

    const changeStyleA = () => {
        console.log("menu-action-A");

        setStyleA("nav-border-bottom-active");
        setStylea("table-on");

        setStyleB("");
        setStyleb("table-off");
    };

    const changeStyleB = () => {
        console.log("menu-action-B");

        setStyleA("");
        setStylea("table-off");

        setStyleB("nav-border-bottom-active");
        setStyleb("table-on");
    };

    return(
        <div className="cont-prod-cat-prin" onClick={changeStyleOptionsDivx}>
            <div className="cont-fila-cat">
                <div className={styleAlmSecond + " display-contents"}>
                    <div className="caja-cont-cat caja-cont-cat-alm">
                        <div className="title-cat title-cat-box">
                            <div className="title-cat-box-flex">
                                <span className="icon icon-prod-nav"><ion-icon name="folder-outline"></ion-icon></span>Almacen 01
                            </div>
                            <div className="icon-options-box">
                                <a href="#" onClick={changeStyleOptions} className={styleOptionsButton + " nav-link nav-link-box"}><span className="icon icon-prod-nav"><ion-icon name="ellipsis-vertical-outline"></ion-icon></span></a>
                                <a href="#" onClick={changeStyleOptionsx} className={styleOptions + " button-activate nav-link nav-link-box"}><span className="icon icon-prod-nav"><ion-icon name="ellipsis-vertical-outline"></ion-icon></span></a>
                            </div>
                            <div className={styleOptions + " options-open"}>
                                <ul className="nav-ul nav-ul-options">
                                    <li className="nav-li nav-li-options inhabilitar-nav-li" onClick={changeStyleOptionsx}><a href="#"><span className="icon icon-prod-nav"><ion-icon name="repeat-outline"></ion-icon></span>Inhabilitar</a></li>
                                    <li className="nav-li nav-li-options" onClick={changeStyleOptionsx}><a href="#" onClick={() => toggle_105()}><span className="icon icon-prod-nav"><ion-icon name="create-outline"></ion-icon></span>Editar</a></li>

                                    <Modal isOpen={modal_105} toggle={toggle_105}>
                                        <ModalHeader toggle={toggle_105}>
                                            <p className="p-modal p-modal-prod">EDITAR <span className="span-modal span-modal-prod">ALMACEN</span>.</p>
                                            <div className="img-cat-modal">
                                                <img src={imgFileAlmacen} className="img-cat-file" alt=""/>
                                            </div>
                                        </ModalHeader>
                                        <ModalBody>
                                            <form action="">
                                                <div className="cont-form-modal">
                                                    <div className="cont-form-modal-cat">
                                                        <div className="form-group">
                                                            <label htmlFor="cat-name">Ingrese almacen</label>
                                                            <div className="input-group mb-3">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="grid-outline"></ion-icon></span>Descripción</span>
                                                                </div>
                                                                <input type="text" id="cat-name" className="form-control" placeholder="Nombre almacen" aria-label="Username" aria-describedby="basic-addon1"/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            {/*<label htmlFor="prod-marca">Marca</label>*/}
                                                            <div className="input-group mb-3">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="scan-outline"></ion-icon></span>Dirección</span>
                                                                </div>
                                                                <input type="text" id="prod-marca" className="form-control" placeholder="Av,jr,pje..." aria-label="Username" aria-describedby="basic-addon1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="div-buton-modal div-buton-modal-cat">
                                                        <button type="button" className="btn btn-color-principal btn-modal-prod"><span className="icon-boton"><ion-icon name="save-outline"></ion-icon></span>GUARDAR</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </ModalBody>
                                        <ModalFooter>
                                            <p className="p-modal p-modal-footer"><span className="span-modal span-footer">Desarrollado por N&W Seguridad Total</span></p>
                                        </ModalFooter>
                                    </Modal>

                                    <li className="nav-li nav-li-options"><a href="#" onClick={changeStyleOptionsx}><span className="icon icon-prod-nav"><ion-icon name="close-outline"></ion-icon></span>Cerrar</a></li>
                                </ul>
                            </div>
                        </div>
                        <a href="#" onClick={changeStyleAlm} className="display-contents-cat">
                            <div className="body-cat">
                                <div className="img-cat">
                                    <img src={imgFileAlmacen} className="img-cat-file"/>
                                </div>
                                <div className="block-cont-cat">
                                    <div className="info-cat">
                                        <p className="p-info-cat"><span className="span-info-cat">Cantidad</span> 12</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={styleAlm + " table-cat"}>
                    <div className="caja-cont-alm-head">
                        <div className="title-cat">
                            <h2 className="h2-cat"><span className="icon icon-prod-nav"><ion-icon name="folder-open-outline"></ion-icon></span>ALMACEN_<span className="span-cat">ATTE</span></h2>
                        </div>
                        <div className="button-cat">
                            <div className="cerrar-caja-cat">
                                <a className="nav-link-cat" onClick={changeStyleAlmx} href="#"><span className="icon icon-prod-nav"><ion-icon name="close-outline" role="img" className="md hydrated" aria-label="close outline"></ion-icon></span>Cerrar</a>
                            </div>
                        </div>
                    </div>

                    <div className="body-prod-prin">
                        <nav className="nav-cont">
                            <div className="icon-nav">
                                <span className="icon icon-prod-nav-prin">
                                    <ion-icon name="git-merge-outline"></ion-icon>
                                </span><h3 className="h3-nav-icon">FILTRO</h3>
                            </div>
                            <ul className="nav-ul">
                                <li className="nav-li">
                                    <a className={styleA + " nav-link"} href="#" onClick={changeStyleA}><span className="icon icon-prod-nav"><ion-icon name="apps-outline"></ion-icon></span>Todos</a>
                                </li>
                                <li className="nav-li">
                                    <a className={styleB + " nav-link"} href="#" onClick={changeStyleB}><span className="icon icon-prod-nav"><ion-icon name="layers-outline"></ion-icon></span>Categorias</a>
                                </li>
                            </ul>
                            <div className="cont-search">
                                <input className="form-control inputBuscar" placeholder="Búscar..."/>
                                <button className="btn bg-almacen color-white">
                                    <FontAwesomeIcon icon={faSearch}/>
                                </button>
                            </div>
                        </nav>

                    </div>

                    <div id="item-table-01" className={styleb}>
                        <div className="cont-fila-cat">
                            <div className={styleCatSecond + " display-contents"}>
                                <div className="caja-cont-cat">
                                    <div className="title-cat title-cat-box">
                                        <div className="title-cat-box-flex">
                                            <span className="icon icon-prod-nav"><ion-icon name="folder-outline"></ion-icon></span>Categoria 01
                                        </div>
                                    </div>
                                    <a href="#" onClick={changeStyleCat} className="display-contents-cat">
                                        <div className="body-cat">
                                            <div className="img-cat">
                                                <img src={imgFile} className="img-cat-file"/>
                                            </div>
                                            <div className="block-cont-cat">
                                                <div className="info-cat">
                                                    <p className="p-info-cat"><span className="span-info-cat">Cantidad</span> 12</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={styleCat + " table-cat"}>
                                <div className="caja-cont-cat-head margin-bottom-20">
                                    <div className="title-cat">
                                        <h2 className="h2-cat"><span className="icon icon-prod-nav"><ion-icon name="folder-open-outline"></ion-icon></span>CATEGORIA_<span className="span-cat">MUEBLES</span></h2>
                                    </div>
                                    <div className="button-cat">
                                        <div className="cerrar-caja-cat">
                                            <a className="nav-link-cat" onClick={changeStyleCatx} href="#"><span className="icon icon-prod-nav"><ion-icon name="close-outline" role="img" className="md hydrated" aria-label="close outline"></ion-icon></span>Cerrar</a>
                                        </div>
                                    </div>
                                </div>
                                <TableProductosCatAlm/>
                            </div>
                        </div>
                    </div>

                    <div id="item-table-01" className={stylea}>
                        <TableAlmacen/>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default AlmacenPrin;