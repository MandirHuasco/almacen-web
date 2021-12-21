import React, {useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import imgFile from '../img/file-img.png';
import TableProductos from "./TableProd";

function TableProductosCatPrin() {

    const [modal_102, setModal_102] = useState(false);
    const toggle_102 = () => setModal_102(!modal_102);

    const [modal_104, setModal_104] = useState(false);
    const toggle_104 = () => setModal_104(!modal_104);

    const [styleCat, setStyleCat] = useState("table-off");
    const [styleCatSecond, setStyleCatSecond] = useState("");

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

    return(
        <div className="cont-prod-cat-prin">
            <div className="cont-fila-cat-head">
                <div className="caja-cont-cat-head">
                    <div className="title-cat">
                        <h2 className="h2-cat"><span className="icon icon-prod-nav"><ion-icon name="layers-outline"></ion-icon></span>CATEGORIAS</h2>
                    </div>
                    <div className="button-cat">
                        <button type="button"  onClick={() => toggle_102()} className="btn btn-color-principal" ><span className="icon-boton"><ion-icon name="add-circle-outline"></ion-icon></span>Agregar Categoría</button>

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
                                                <label htmlFor="cat-name">Ingrese nueva categoría</label>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="cube-outline"></ion-icon></span>Descripción</span>
                                                    </div>
                                                    <input type="text" id="cat-name" className="form-control" placeholder="Nombre categoría" aria-label="Username" aria-describedby="basic-addon1"/>
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
            <div className="cont-fila-cat">
                <div className={styleCatSecond + " display-contents"}>
                    <div className="caja-cont-cat">
                        <div className="title-cat title-cat-box">
                            <span className="icon icon-prod-nav"><ion-icon name="folder-outline"></ion-icon></span>Categoria 01
                            <div className="icon-options-box">
                                <a href="#" onClick={changeStyleOptions} className={styleOptionsButton + " nav-link nav-link-box"}><span className="icon icon-prod-nav"><ion-icon name="ellipsis-vertical-outline"></ion-icon></span></a>
                                <a href="#" onClick={changeStyleOptionsx} className={styleOptions + " button-activate nav-link nav-link-box"}><span className="icon icon-prod-nav"><ion-icon name="ellipsis-vertical-outline"></ion-icon></span></a>
                            </div>
                            <div className={styleOptions + " options-open"}>
                                <ul className="nav-ul nav-ul-options">
                                    <li className="nav-li nav-li-options" onClick={changeStyleOptionsx}><a href="#" onClick={() => toggle_104()}><span className="icon icon-prod-nav"><ion-icon name="create-outline"></ion-icon></span>Editar</a></li>

                                    <Modal isOpen={modal_104} toggle={toggle_104}>
                                        <ModalHeader toggle={toggle_104}>
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
                                                            <label htmlFor="cat-name">Ingrese nueva categoría</label>
                                                            <div className="input-group mb-3">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="cube-outline"></ion-icon></span>Descripción</span>
                                                                </div>
                                                                <input type="text" id="cat-name" className="form-control" placeholder="Nombre categoría" aria-label="Username" aria-describedby="basic-addon1"/>
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
    )
}
export default TableProductosCatPrin;