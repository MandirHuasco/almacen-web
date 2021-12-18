import React, {useState} from "react";
import QRCode from "react-qr-code";
import Principal from "./Principal";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

function Productos() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_101, setModal_101] = useState(false);
    const toggle_101 = () => setModal_101(!modal_101);

    // eslint-disable-next-line no-undef
    JsBarcode(".barcode").init();

    return(
        <div className="App App-prin">
            <div className="background-image background-image-prin background-image-prin-almacen">
            </div>

            <Principal/>

            <div className="cont-prod-prin">
                <div className="cont-prin">
                    <div className="header-prod-prin">
                        <div className="title-head-prod">
                            <h2 className="title-prod"><span className="icon icon-prod"><ion-icon name="cube-outline"></ion-icon></span>PRODUCTOS</h2>
                        </div>
                        <div className="cont-buttons-prod">
                            <button type="button" onClick={() => toggle_101()} className="btn btn-color-principal" ><span className="icon-boton"><ion-icon name="add-circle-outline"></ion-icon></span>Agregar</button>

                            <Modal isOpen={modal_101} toggle={toggle_101}>
                                <ModalHeader toggle={toggle_101}>
                                    <p className="p-modal p-modal-prod">NUEVO <span className="span-modal span-modal-prod">PRODUCTO</span>.</p>
                                </ModalHeader>
                                <ModalBody>
                                    <form action="">
                                        <div className="cont-form-modal">
                                            <div className="cont-form-modal-prod">
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

                                                    <div className="form-group">
                                                        {/*<label htmlFor="prod-color">Color</label>*/}
                                                        <div className="input-group mb-3">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="color-palette-outline"></ion-icon></span>Color</span>
                                                            </div>
                                                            <input type="text" id="prod-color" className="form-control" placeholder="NEGRO, PLOMO, AZUL, ..." aria-label="Username" aria-describedby="basic-addon1"/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        {/*<label htmlFor="prod-material">Material</label>*/}
                                                        <div className="input-group mb-3">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="shapes-outline"></ion-icon></span>Material</span>
                                                            </div>
                                                            <input type="text" id="prod-material" className="form-control" placeholder="FIBRA, MADERA, MELAMINE, ..." aria-label="Username" aria-describedby="basic-addon1"/>
                                                        </div>
                                                    </div>

                                                    <div className="cont-form-left-right">
                                                        <div className="form-left">
                                                            <div className="form-group">
                                                                {/*<label htmlFor="prod-modelo">Modelo</label>*/}
                                                                <div className="input-group mb-3">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="create-outline"></ion-icon></span>Modelo</span>
                                                                    </div>
                                                                    <input type="text" id="prod-modelo" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                {/*<label htmlFor="prod-numseri">Número de Serie</label>*/}
                                                                <div className="input-group mb-3">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="create-outline"></ion-icon></span>NUMSERI</span>
                                                                    </div>
                                                                    <input type="text" id="prod-numseri" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                {/*<label htmlFor="prod-etscons">ETS CONS</label>*/}
                                                                <div className="input-group mb-3">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="create-outline"></ion-icon></span>ETS CONS</span>
                                                                    </div>
                                                                    <input type="text" id="prod-etscons" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form-right">
                                                            <div className="form-group">
                                                                {/*<label htmlFor="prod-codpatr">Código Patrimonio</label>*/}
                                                                <div className="input-group mb-3">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="create-outline"></ion-icon></span>CODPATR</span>
                                                                    </div>
                                                                    <input type="text" id="prod-codpatr" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                {/*<label htmlFor="prod-medbien">MED BIEN</label>*/}
                                                                <div className="input-group mb-3">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="create-outline"></ion-icon></span>MED BIEN</span>
                                                                    </div>
                                                                    <input type="text" id="prod-medbien" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                {/*<label htmlFor="prod-sitbien">SIT BIEN</label>*/}
                                                                <div className="input-group mb-3">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="create-outline"></ion-icon></span>SIT BIEN</span>
                                                                    </div>
                                                                    <input type="text" id="prod-sitbien" className="form-control" placeholder="A ,T , ..." aria-label="Username" aria-describedby="basic-addon1"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="prod-fecdocu">Fecha Documentación</label>
                                                        <div className="input-group mb-3">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="calendar-outline"></ion-icon></span>FEC DOCU</span>
                                                            </div>
                                                            <input type="date" id="prod-fecdocu" className="form-control" placeholder=".. / .. / .." aria-label="Username" aria-describedby="basic-addon1"/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="prod-fecultasign">Fecha ULTASIGN</label>
                                                        <div className="input-group mb-3">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="calendar-outline"></ion-icon></span>F ULTASIGN</span>
                                                            </div>
                                                            <input type="date" id="prod-fecultasign" className="form-control" placeholder=".. / .. / .." aria-label="Username" aria-describedby="basic-addon1"/>
                                                        </div>
                                                    </div>

                                                    <div className="cont-form-left-right">
                                                        <div className="form-left">
                                                            <div className="form-group">
                                                                {/*<label htmlFor="prod-codunor">Código UNOR</label>*/}
                                                                <div className="input-group mb-3">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="create-outline"></ion-icon></span>COD UNOR</span>
                                                                    </div>
                                                                    <input type="text" id="prod-codunor" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                {/*<label htmlFor="prod-numpiso">Número Piso</label>*/}
                                                                <div className="input-group mb-3">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="create-outline"></ion-icon></span>NRO PISO</span>
                                                                    </div>
                                                                    <input type="text" id="prod-numpiso" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form-right">
                                                            <div className="form-group">
                                                                {/*<label htmlFor="prod-codlocal">Código Local</label>*/}
                                                                <div className="input-group mb-3">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="create-outline"></ion-icon></span>COD LOCAL</span>
                                                                    </div>
                                                                    <input type="text" id="prod-codlocal" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                {/*<label htmlFor="prod-regtrab">Código Local</label>*/}
                                                                <div className="input-group mb-3">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="create-outline"></ion-icon></span>REG TRAB</span>
                                                                    </div>
                                                                    <input type="text" id="prod-regtrab" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="prod-fec09">Fecha 09</label>
                                                        <div className="input-group mb-3">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="create-outline"></ion-icon></span>FEC_09</span>
                                                            </div>
                                                            <input type="date" id="prod-fec09" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"/>
                                                        </div>
                                                    </div>

                                                    <div className="cont-form-left-right">
                                                        <div className="form-three">
                                                            <div className="form-group">
                                                                {/*<label htmlFor="prod-inv09">INV-09</label>*/}
                                                                <div className="input-group mb-3">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="create-outline"></ion-icon></span>INV-09</span>
                                                                    </div>
                                                                    <input type="text" id="prod-inv09" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-three">
                                                            <div className="form-group">
                                                                {/*<label htmlFor="prod-sede">Sede</label>*/}
                                                                <div className="input-group mb-3">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="create-outline"></ion-icon></span>Sede</span>
                                                                    </div>
                                                                    <input type="text" id="prod-sede" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-three">
                                                            <div className="form-group">
                                                                {/*<label htmlFor="prod-a">A</label>*/}
                                                                <div className="input-group mb-3">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="create-outline"></ion-icon></span>A</span>
                                                                    </div>
                                                                    <input type="text" id="prod-a" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className="cont-form-modal-prod" id="mycanvas">
                                                <div className="cont-qr">
                                                    <div className="title-cont-qr">
                                                        <h2 className="title-prod qr-title">Código QR</h2>
                                                    </div>
                                                    <div className="qr-cont">
                                                        <QRCode value="hey"/>
                                                    </div>
                                                </div>

                                                <div className="title-cont-qr">
                                                    {/* eslint-disable-next-line no-undef */}
                                                    <h2 className="title-prod qr-title">Código de Barra {Date.now()}</h2>
                                                </div>
                                                <svg className="barcode"
                                                     jsbarcode-format="upc"
                                                     jsbarcode-value="123456789012"
                                                     jsbarcode-textmargin="0"
                                                     jsbarcode-fontoptions="bold">
                                                </svg>
                                            </div>
                                        </div>
                                    </form>
                                </ModalBody>
                                <ModalFooter>
                                    <p className="p-modal p-modal-footer"><span className="span-modal span-footer">Desarrollado por N&W Seguridad Total</span></p>
                                </ModalFooter>
                            </Modal>

                            <button type="button" className="btn btn-color-principal">Primary</button>
                        </div>
                    </div>
                    <div className="body-prod-prin">

                    </div>
                    <div className="footer-prod-prin">

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Productos;