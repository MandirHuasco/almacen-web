import React, {useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

function TableAlmacenAlm() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_202, setModal_202] = useState(false);
    const toggle_202 = () => setModal_202(!modal_202);

    return(
        <div className="scrolling-wrapper">
            <div className="cont-table-prod">
                <table className="table-cont-prod">
                    <thead>
                    <tr className="tr-head-prod">
                        <th className="td-head-prod text-aling-center"><span className="icon"><ion-icon name="repeat-outline"></ion-icon></span></th>
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
                            <button type="button" onClick={() => toggle_202()} className="btn btn-color-principal button-inactive-alm"><span className="icon-boton"><ion-icon name="repeat-outline"></ion-icon></span>Transferencia</button>
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
                            <button type="button" onClick={() => toggle_202()} className="btn btn-color-principal button-inactive-alm"><span className="icon-boton"><ion-icon name="repeat-outline"></ion-icon></span>Transferencia</button>
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
                            <button type="button" onClick={() => toggle_202()} className="btn btn-color-principal button-inactive-alm"><span className="icon-boton"><ion-icon name="repeat-outline"></ion-icon></span>Transferencia</button>
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

                <Modal isOpen={modal_202} toggle={toggle_202}>
                    <ModalHeader toggle={toggle_202}>
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

            </div>
        </div>
    )
}
export default TableAlmacenAlm;