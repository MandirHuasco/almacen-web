import React, {useState} from "react";
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button} from '@material-ui/core';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import QRCode from "qrcode";

function TableProductosCatAlmInactive() {

    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const classes = useStyles();


    const generateQrCode = async () => {
        try {
            const response = await QRCode.toDataURL(text + Date.now());
            setImageUrl(response);
        }catch (error) {
            console.log(error);
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_203, setModal_203] = useState(false);
    const toggle_203 = () => setModal_203(!modal_203);

    const [modal_210, setModal_210] = useState(false);
    const toggle_210 = () => setModal_210(!modal_210);

    return(
        <div className="scrolling-wrapper">
            <div className="cont-table-prod">
                <table className="table-cont-prod">
                    <thead>
                    <tr className="tr-head-prod">
                        <th className="td-head-prod text-aling-center"><span className="icon"><ion-icon name="repeat-outline"></ion-icon></span></th>
                        <th className="td-head-prod text-aling-center"><span className="icon"><ion-icon name="create-outline"></ion-icon></span></th>
                        <th className="td-head-prod text-aling-center"><span className="icon"><ion-icon name="cloud-offline-outline"></ion-icon></span></th>
                        <th className="td-head-prod">Item</th>
                        <th className="td-head-prod">Cod-Barra</th>
                        <th className="td-head-prod">Cod-QR</th>
                        <th className="td-head-prod">Cod-Patr</th>
                        <th className="td-head-prod">Num-Serie</th>
                        <th className="td-head-prod">Descripción</th>
                        <th className="td-head-prod">Marca</th>
                        <th className="td-head-prod">Modelo</th>
                        <th className="td-head-prod">Color</th>
                        <th className="td-head-prod">Material</th>
                        <th className="td-head-prod">Med-Bien</th>
                        <th className="td-head-prod">Est-Cons</th>
                        <th className="td-head-prod">Sit-Bien</th>
                        <th className="td-head-prod">Fech-Docu</th>
                        <th className="td-head-prod">F-Ulta-Sign</th>
                        <th className="td-head-prod">Cod-Unor</th>
                        <th className="td-head-prod">Cod-Local</th>
                        <th className="td-head-prod">Nom-Piso</th>
                        <th className="td-head-prod">Reg-Trab</th>
                        <th className="td-head-prod">Fech-09</th>
                        <th className="td-head-prod">Inv-09</th>
                        <th className="td-head-prod">Sede</th>
                        <th className="td-head-prod">A</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="tr-body-prod">
                        <td className="td-body-prod">
                            <button type="button" onClick={() => toggle_210()} className="btn btn-color-principal button-active-alm"><span className="icon-boton"><ion-icon name="repeat-outline"></ion-icon></span>Transferencia</button>
                        </td>
                        <td className="td-body-prod">
                            <button type="button" onClick={() => toggle_203()} className="btn btn-color-principal"><span className="icon-boton"><ion-icon name="create-outline"></ion-icon></span>Editar</button>
                        </td>
                        <td className="td-body-prod">
                            <button type="button" className="btn btn-color-principal button-inactive-alm"><span className="icon-boton"><ion-icon name="cloud-offline-outline"></ion-icon></span>Deshabilitar</button>
                        </td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                    </tr>
                    <tr className="tr-body-prod">
                        <td className="td-body-prod">
                            <button type="button" onClick={() => toggle_210()} className="btn btn-color-principal button-active-alm"><span className="icon-boton"><ion-icon name="repeat-outline"></ion-icon></span>Transferencia</button>
                        </td>
                        <td className="td-body-prod">
                            <button type="button" onClick={() => toggle_203()} className="btn btn-color-principal"><span className="icon-boton"><ion-icon name="create-outline"></ion-icon></span>Editar</button>
                        </td>
                        <td className="td-body-prod">
                            <button type="button" className="btn btn-color-principal button-inactive-alm"><span className="icon-boton"><ion-icon name="cloud-offline-outline"></ion-icon></span>Deshabilitar</button>
                        </td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                    </tr>
                    <tr className="tr-body-prod">
                        <td className="td-body-prod">
                            <button type="button" onClick={() => toggle_210()} className="btn btn-color-principal button-active-alm"><span className="icon-boton"><ion-icon name="repeat-outline"></ion-icon></span>Transferencia</button>
                        </td>
                        <td className="td-body-prod">
                            <button type="button" onClick={() => toggle_203()} className="btn btn-color-principal"><span className="icon-boton"><ion-icon name="create-outline"></ion-icon></span>Editar</button>
                        </td>
                        <td className="td-body-prod">
                            <button type="button" className="btn btn-color-principal button-inactive-alm"><span className="icon-boton"><ion-icon name="cloud-offline-outline"></ion-icon></span>Deshabilitar</button>
                        </td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                        <td className="td-body-prod">Item</td>
                    </tr>
                    </tbody>
                </table>

                <Modal isOpen={modal_210} toggle={toggle_210}>
                    <ModalHeader toggle={toggle_210}>
                        <p className="p-modal p-modal-prod">REALIZAR <span className="span-modal span-modal-prod">TRANSFERENCIA</span>.</p>
                    </ModalHeader>
                    <ModalBody>
                        <form action="">
                            <div className="cont-form-modal">
                                <div className="cont-form-modal-alm">
                                    <div className="form-group">
                                        <label htmlFor="prod-name">Seleccione almacen</label>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="grid-outline"></ion-icon></span>Almacenes</span>
                                            </div>
                                            <select name="almacenes" id="Almacenes" className="select-almacenes">
                                                <option value="volvo">Almacen_01</option>
                                                <option value="saab">Almacen_02</option>
                                                <option value="opel">Almacen_03</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            {/*<label htmlFor="prod-marca">Marca</label>*/}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text bg-form" id="basic-addon1"><span className="icon-boton"><ion-icon name="accessibility-outline"></ion-icon></span>Responsable</span>
                                                </div>
                                                <input type="text" id="prod-marca" className="form-control" placeholder="Apellidos, Nombres..." aria-label="Username" aria-describedby="basic-addon1"/>
                                            </div>
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

                <Modal isOpen={modal_203} toggle={toggle_203} className="prod-modal">
                    <ModalHeader toggle={toggle_203}>
                        <p className="p-modal p-modal-prod">EDITAR <span className="span-modal span-modal-prod">PRODUCTO</span>.</p>
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

                                    <div>
                                        <div className="title-cont-qr">
                                            <h2 className="title-prod qr-title">Código QR</h2>
                                        </div>
                                        <div className="qr-cont">
                                            <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAXNSR0IArs4c6QAABORJREFUeF7tndFu4zAMBJv//+gecG92Dh0MlnIq3fZVtETukJTktOnr+/v7+6s/xyjwKtBjWP4NpEDP4lmgh/Es0AI9TYHD4ukeWqCHKXBYOK3QAj1MgcPCaYUW6GEKHBZOK7RAD1PgsHBaoQV6mAKHhRNX6Ov1elQS+/Et+Ufz0fPTwZM/tF6Bwuf7BUopFI7bDCYgNB89H4bz9jj5Q+u1Qluh1xy5Z3CaYfcMpPmpgsgfOz/NRxVk49Pzpb9TRIJYh2zABXorsAK9ntLvFfjphLUFMb6HPt2SWqEPVygJfs9AWyGfrqDV8f26Cl0dcIG2QlXSU8KsTljl7MQvWn86YFrfCjJ9yk63FOv/8kPR6gy285NA6R4+PT/N95aAq68tVvDVgpJAq9e385O/BQoKWcFXJ2yBWgVu9gV6+zyUBCG96Xl6cWErJj202PXS+Ei/7Q9FdColAQr0pgBdG57OYLtegRboRQGbQNu3XNvyqIXSHmrXsx3m6fV1PKvvodahAs2+w2T5oahAf1aAOoTVr0Dlteu/a7k2o6y9PVRQBdhx66+1TxNmvEJtANa+QKGFTx+KLCBrX6AFelEgTQibgNb+4y3XOjxtP70HpoJOx2fni/dQu+C0fYFeFS3QW4a1QqdLTs7XCh2uUBJU8nkzp/lpnNZPX67Tq0paf7ojxC03FZQCpvlp3M5P9gRgOkHIn7eEmr6HUsDawcWv5qYBTM+n9SpQ95UClLDbA9UZBN/J8LRg1LI/Pa71TStUL1igF8koYbS+BZr9fSgBSccLVL4oSAVf/fzHgdKhgF6OUwC0x9LzKQC6d9r40njGry0U4H3cBkzPE0Dyj/whwW2CTMdToMP32gK9fS8QtejpjLYA/rsKJYGmWx4lAAGwLZrsU3+sfuhPem2xDpG9HZ+uYBKMEtT6Q/FqfwrUSna1b4WGh5JUwAzf+9OpP7+uQkkgCpiet+PpNYRaarpHTwNcfm0hQSwga1+gacqB4q3Qn/fcafnj31igCirQw4AS8HScEoZasF2fKmr1Hkn+Lq9QciAdL9BbB0jvoSmQ9PkCLdAoh45vuVQhkXr/eHhaUNrzKL50j6Z4rH7xHkoBW4fIngQgQHRPtoCs/X19iof0GH+xUKDXL7mwehSo/D8rJBhVNAE6vkJJQN1C4GU+zUdA6HmKhxLCtnjyh8bH91ASgByaFqBApeI2Q+X0X+n8BSoVTwWn5dL5C5QUvo2T4FZQOmRQS6f10vlpS1h9LSE8y/dQEpgEoIRJBbbzp+sRkHS8QBefoqmjpACXv1iglkYB0PMkEHWEdP5WqPwf3angtoWutqcEnh4/vuXaip62nwZG8xWo3ENtRROA6fECLdBrTlHG0iHl09cWqhDyn/Z8mp/it88fX6GpYAU6/OeC1AFWXyMKtEBtl7zY0ymbJl/ecskBGk8rNBUo9c9WOK1H4wVKCsE4JVyB3gQkwWgPbYXKjLWCy+n1B9yr/bEJtH2FWmDWfvW9jxIiHbfxWvvxPdQ6YO0L9GfFChSuWZRAdtwmsLUv0AK1OVP7JxWIK/RJZ7sWK1CgrNFWFgW6FS52tkBZo60sCnQrXOxsgbJGW1kU6Fa42NkCZY22sijQrXCxswXKGm1lUaBb4WJnC5Q12sqiQLfCxc4WKGu0lUWBboWLnf0Dz3YDDqaFuw4AAAAASUVORK5CYII=" alt="" />
                                        </div>
                                    </div>

                                    <div className="cont-qr">
                                        <div className="title-cont-qr">
                                            <h2 className="title-prod qr-title">Generar nuevo Código QR</h2>
                                        </div>
                                        <div className="qr-cont">
                                            <Container className={classes.conatiner}>
                                                <Card>
                                                    <h2 className={classes.title}>Ingrese el nombre de producto y genere un QR unico</h2>
                                                    <CardContent>
                                                        <Grid container spacing={2}>
                                                            <div className="cont-qr-flex">
                                                                <div className="cont-qr-flex-left">
                                                                    <TextField label="Nombre de Producto" onChange={(e) => setText(e.target.value)}/>
                                                                    <Button className={classes.btn} variant="contained" color="primary" onClick={() => generateQrCode()}>Generate</Button>
                                                                    {imageUrl ? (
                                                                        <a href={imageUrl} className="img-qr" download>
                                                                            <img src={imageUrl} alt="img"/>
                                                                        </a>) : null}
                                                                </div>
                                                                <div className="cont-qr-flex-right">
                                                                    <input type="text" value={imageUrl.replace('data:image/png;base64,','')} className="input-code" readOnly="readonly"/>
                                                                </div>
                                                            </div>
                                                        </Grid>
                                                    </CardContent>
                                                </Card>
                                            </Container>
                                        </div>
                                    </div>

                                    <div className="title-cont-qr">
                                        {/* eslint-disable-next-line no-undef */}
                                        <h2 className="title-prod qr-title">Código de Barra {Date.now()}</h2>
                                    </div>

                                    <div className="div-buton-modal">
                                        <button type="button" className="btn btn-color-principal btn-modal-prod"><span className="icon-boton"><ion-icon name="save-outline"></ion-icon></span> GUARDAR</button>
                                    </div>


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
    )
}
const useStyles = makeStyles((theme) => ({
    conatiner: {
        marginTop: 10
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:  'center',
        background: '#3f51b5',
        fontSize: 20,
        color: '#fff',
        padding: 20
    },
    btn : {
        marginTop: 10,
        marginBottom: 20
    }
}));
export default TableProductosCatAlmInactive;