import React, {useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

import imgFile from '../img/file-img.png';
import imgFileInactive from '../img/file-img-inactive.png';

import TableProductos from "./TableProd";

function TableProductosCatPrin() {

    const [modal_102, setModal_102] = useState(false);
    const toggle_102 = () => setModal_102(!modal_102);

    const [modal_104, setModal_104] = useState(false);
    const toggle_104 = () => setModal_104(!modal_104);

    const [modal_105, setModal_105] = useState(false);
    const toggle_105 = () => setModal_105(!modal_105);

    const [styleCat, setStyleCat] = useState("table-off");
    const [styleCatSecond, setStyleCatSecond] = useState("");

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

    const [styleMenu, setStyleMenu] = useState("div-off");
    const [styleMenuButton, setStyleMenuButton] = useState("div-on-flex");

    const changeStyleMenu = () => {
        console.log("action-options");

        setStyleMenu("div-on-flex");
        setStyleMenuButton("div-off");
    };

    const changeStyleMenux = () => {
        console.log("action-options");

        setStyleMenu("div-off");
        setStyleMenuButton("div-on-flex");
    };

    return(
        <div className="cont-prod-cat-prin" onClick={changeStyleOptionsDivx}>
            <div className="cont-fila-cat-head">
                <div className="caja-cont-cat-head">
                    <div className="title-cat title-cat-prod">
                        <h2 className="h2-cat h2-cat-block"><span className="icon icon-prod-nav"><ion-icon name="layers-outline"></ion-icon></span>CATEGORIAS</h2>
                    </div>
                    <div className="button-cat btn-cat-prod">
                        <button type="button"  onClick={() => toggle_102()} className="btn btn-color-principal" ><span className="icon-boton"><ion-icon name="add-circle-outline"></ion-icon></span>Agregar Categor??a</button>

                        <Modal isOpen={modal_102} toggle={toggle_102}>
                            <ModalHeader toggle={toggle_102}>
                                <p className="p-modal p-modal-prod">NUEVA <span className="span-modal span-modal-prod">CATEGORIA</span>.</p>
                                <div className="img-cat-modal">
                                    <img src={imgFile} className="img-cat-file" alt=""/>
                                </div>
                            </ModalHeader>
                            <ModalBody>
                                <form action="">
                                    <div className="cont-form-modal">
                                        <div className="cont-form-modal-cat">
                                            <div className="form-group">
                                                <label htmlFor="cat-name">Ingrese nueva categor??a</label>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="cube-outline"></ion-icon></span>Descripci??n</span>
                                                    </div>
                                                    <input type="text" id="cat-name" className="form-control" placeholder="Nombre categor??a" aria-label="Username" aria-describedby="basic-addon1"/>
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

                    </div>
                </div>
            </div>

            <div className="body-prod-prin">
                <nav className="nav-cont">
                    <div className="icon-nav">
                                <span className="icon icon-prod-nav-prin">
                                    <ion-icon name="git-merge-outline"></ion-icon>
                                </span><h3 className="h3-nav-icon h3-nav-icon-cat padding-10">CATEGORIAS</h3>
                        <h3 className={styleMenuButton + " h3-nav-icon h3-nav-icon-off padding-10"} onClick={changeStyleMenu}>CATEGORIAS</h3>
                        <h3 className={styleMenu + " h3-nav-icon h3-nav-icon-off padding-10"} onClick={changeStyleMenux}>CATEGORIAS</h3>
                    </div>
                    <ul className="nav-ul nav-ul-off-cat">
                        <li className="nav-li">
                            <a className={styleA + " nav-link"} href="#" onClick={changeStyleA}><span className="icon icon-prod-nav"><ion-icon name="checkmark-circle-outline"></ion-icon></span>Activos</a>
                        </li>
                        <li className="nav-li">
                            <a className={styleB + " nav-link"} href="#" onClick={changeStyleB}><span className="icon icon-prod-nav"><ion-icon name="close-circle-outline"></ion-icon></span>Inactivos</a>
                        </li>
                    </ul>
                </nav>
                <ul className={styleMenu + " nav-ul nav-ul-desplegable-off"}>
                    <li className="nav-li  nav-li-desplegable">
                        <a className={styleA + " nav-link"} href="#" onClick={changeStyleA}><span className="icon icon-prod-nav"><ion-icon name="checkmark-circle-outline"></ion-icon></span>Activos</a>
                    </li>
                    <li className="nav-li  nav-li-desplegable">
                        <a className={styleB + " nav-link"} href="#" onClick={changeStyleB}><span className="icon icon-prod-nav"><ion-icon name="close-circle-outline"></ion-icon></span>Inactivos</a>
                    </li>
                </ul>
            </div>

            <div id="item-table-01" className={stylea}>
                <div className="cont-fila-cat">
                    <div className={styleCatSecond + " display-contents"}>
                        <div className="caja-cont-cat">
                            <div className="title-cat title-cat-box">
                                <div className="title-cat-box-flex">
                                    <span className="icon icon-prod-nav"><ion-icon name="folder-outline"></ion-icon></span>Categoria_01
                                </div>
                                <div className="icon-options-box">
                                    <a href="#" onClick={changeStyleOptions} className={styleOptionsButton + " nav-link nav-link-box"}><span className="icon icon-prod-nav"><ion-icon name="ellipsis-vertical-outline"></ion-icon></span></a>
                                    <a href="#" onClick={changeStyleOptionsx} className={styleOptions + " button-activate nav-link nav-link-box"}><span className="icon icon-prod-nav"><ion-icon name="ellipsis-vertical-outline"></ion-icon></span></a>
                                </div>
                                <div className={styleOptions + " options-open"}>
                                    <ul className="nav-ul nav-ul-options">
                                        <li className="nav-li nav-li-options inhabilitar-nav-li" onClick={changeStyleOptionsx}><a href="#"><span className="icon icon-prod-nav"><ion-icon name="repeat-outline"></ion-icon></span>Inhabilitar</a></li>
                                        <li className="nav-li nav-li-options" onClick={changeStyleOptionsx}><a href="#" onClick={() => toggle_104()}><span className="icon icon-prod-nav"><ion-icon name="create-outline"></ion-icon></span>Editar</a></li>

                                        <Modal isOpen={modal_104} toggle={toggle_104}>
                                            <ModalHeader toggle={toggle_104}>
                                                <p className="p-modal p-modal-prod">EDITAR <span className="span-modal span-modal-prod">CATEGORIA</span>.</p>
                                                <div className="img-cat-modal">
                                                    <img src={imgFile} className="img-cat-file" alt=""/>
                                                </div>
                                            </ModalHeader>
                                            <ModalBody>
                                                <form action="">
                                                    <div className="cont-form-modal">
                                                        <div className="cont-form-modal-cat">
                                                            <div className="form-group">
                                                                <label htmlFor="cat-name">Ingrese categor??a</label>
                                                                <div className="input-group mb-3">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="cube-outline"></ion-icon></span>Descripci??n</span>
                                                                    </div>
                                                                    <input type="text" id="cat-name" className="form-control" placeholder="Nombre categor??a" aria-label="Username" aria-describedby="basic-addon1"/>
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
                        <TableProductos/>
                    </div>
                </div>
            </div>
            <div id="item-table-01" className={styleb}>
                <div className="cont-fila-cat">
                    <div className={styleCatSecond + " display-contents"}>
                        <div className="caja-cont-cat">
                            <div className="title-cat title-cat-box">
                                <div className="title-cat-box-flex">
                                    <span className="icon icon-prod-nav"><ion-icon name="folder-outline"></ion-icon></span>Categoria 02
                                </div>
                                <div className="icon-options-box">
                                    <a href="#" onClick={changeStyleOptions} className={styleOptionsButton + " nav-link nav-link-box"}><span className="icon icon-prod-nav"><ion-icon name="ellipsis-vertical-outline"></ion-icon></span></a>
                                    <a href="#" onClick={changeStyleOptionsx} className={styleOptions + " button-activate nav-link nav-link-box"}><span className="icon icon-prod-nav"><ion-icon name="ellipsis-vertical-outline"></ion-icon></span></a>
                                </div>
                                <div className={styleOptions + " options-open"}>
                                    <ul className="nav-ul nav-ul-options">
                                        <li className="nav-li nav-li-options recuperar" onClick={changeStyleOptionsx}><a href="#"><span className="icon icon-prod-nav"><ion-icon name="repeat-outline"></ion-icon></span>Recuperar</a></li>
                                        <li className="nav-li nav-li-options" onClick={changeStyleOptionsx}><a href="#" onClick={() => toggle_105()}><span className="icon icon-prod-nav"><ion-icon name="create-outline"></ion-icon></span>Editar</a></li>

                                        <Modal isOpen={modal_105} toggle={toggle_105}>
                                            <ModalHeader toggle={toggle_105}>
                                                <p className="p-modal p-modal-prod">EDITAR <span className="span-modal span-modal-prod">CATEGORIA</span>.</p>
                                                <div className="img-cat-modal">
                                                    <img src={imgFileInactive} className="img-cat-file" alt=""/>
                                                </div>
                                            </ModalHeader>
                                            <ModalBody>
                                                <form action="">
                                                    <div className="cont-form-modal">
                                                        <div className="cont-form-modal-cat">
                                                            <div className="form-group">
                                                                <label htmlFor="cat-name">Ingrese categor??a</label>
                                                                <div className="input-group mb-3">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="cube-outline"></ion-icon></span>Descripci??n</span>
                                                                    </div>
                                                                    <input type="text" id="cat-name" className="form-control" placeholder="Nombre categor??a" aria-label="Username" aria-describedby="basic-addon1"/>
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
                            <a href="#" onClick={changeStyleCat} className="display-contents-cat">
                                <div className="body-cat">
                                    <div className="img-cat">
                                        <img src={imgFileInactive} className="img-cat-file"/>
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
                                <h2 className="h2-cat"><span className="icon icon-prod-nav"><ion-icon name="folder-open-outline"></ion-icon></span>CATEGORIA_<span className="span-cat">INMUEBLES</span></h2>
                            </div>
                            <div className="button-cat">
                                <div className="cerrar-caja-cat">
                                    <a className="nav-link-cat" onClick={changeStyleCatx} href="#"><span className="icon icon-prod-nav"><ion-icon name="close-outline" role="img" className="md hydrated" aria-label="close outline"></ion-icon></span>Cerrar</a>
                                </div>
                            </div>
                        </div>
                        <TableProductos/>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default TableProductosCatPrin;