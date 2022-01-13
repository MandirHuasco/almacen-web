import React, {useState} from "react";
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button} from '@material-ui/core';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import QRCode from 'qrcode'
import TableProductos from "./Vistas/TableProd";
import TableProductosCatPrin from "./Vistas/TableCatPrin";
import TableProductosInactivos from "./Vistas/TableProdInactive";
import TableProductosActive from "./Vistas/TableProdActive";

function Productos() {

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

    const [style, setStyle] = useState("");

    const [stylea, setStylea] = useState("table-off");
    const [styleA, setStyleA] = useState("");

    const [styleb, setStyleb] = useState("table-off");
    const [styleB, setStyleB] = useState("");

    const [stylec, setStylec] = useState("table-off");
    const [styleC, setStyleC] = useState("");

    const [styled, setStyled] = useState("table-off");
    const [styleD, setStyleD] = useState("");

    const [stylex, setStylex] = useState("table-off");

    const [oscuro, setOscuro] = useState("");
    const [oscuroFont, setOscuroFont] = useState("");
    const [oscuroButton, setOscuroButton] = useState("");
    const [oscuroButtonOn, setOscuroButtonOn] = useState("div-off");

    const [oscuroCardsFont, setOscuroCardsFont] = useState("");

    const changeStyleA = () => {
        console.log("menu-action-A");

        setStyle("pading-card-active");

        setStyleA("nav-border-bottom-active");
        setStylea("table-on");

        setStyleB("");
        setStyleb("table-off");

        setStyleC("");
        setStylec("table-off");

        setStyleD("");
        setStyled("table-off");

        setStylex("table-on");
    };

    const changeStyleB = () => {
        console.log("menu-action-B");

        setStyle("pading-card-active");

        setStyleA("");
        setStylea("table-off");

        setStyleB("nav-border-bottom-active");
        setStyleb("table-on");

        setStyleC("");
        setStylec("table-off");

        setStyleD("");
        setStyled("table-off");

        setStylex("table-on");
    };

    const changeStyleC = () => {
        console.log("menu-action-C");

        setStyle("pading-card-active");

        setStyleA("");
        setStylea("table-off");

        setStyleB("");
        setStyleb("table-off");

        setStyleC("nav-border-bottom-active");
        setStylec("table-on");

        setStyleD("");
        setStyled("table-off");

        setStylex("table-on");
    };

    const changeStyleD = () => {
        console.log("menu-action-D");

        setStyle("pading-card-active");

        setStyleA("");
        setStylea("table-off");

        setStyleB("");
        setStyleb("table-off");

        setStyleC("");
        setStylec("table-off");

        setStyleD("nav-border-bottom-active");
        setStyled("table-on");

        setStylex("table-on");
    };

    const changeStyleX = () => {
        console.log("menu-action-X");

        setStyle("");

        setStyleA("");
        setStylea("table-off");

        setStyleB("");
        setStyleb("table-off");

        setStyleC("");
        setStylec("table-off");

        setStyleD("");
        setStyled("table-off");

        setStylex("table-off");
    };

    const ModoOScuro = () => {
        console.log("menu-action-X");

        setOscuro("mode-oscuro");
        setOscuroFont("mode-oscuro-letra")
        setOscuroButton("div-off")
        setOscuroButtonOn("div-oscuro-on")
        setOscuroCardsFont("mode-claro-letra")
    };

    const ModoClaro = () => {
        console.log("menu-action-X");

        setOscuro("mode-claro");
        setOscuroFont("mode-claro-letra")
        setOscuroButton("div-oscuro-on")
        setOscuroButtonOn("div-off")
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_101, setModal_101] = useState(false);
    const toggle_101 = () => setModal_101(!modal_101);

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

    const changeStyleMenuxA = () => {
        console.log("menu-action-A-menu");

        setStyle("pading-card-active");

        setStyleA("nav-border-bottom-active");
        setStylea("table-on");

        setStyleB("");
        setStyleb("table-off");

        setStyleC("");
        setStylec("table-off");

        setStyleD("");
        setStyled("table-off");

        setStylex("table-on");

        setStyleMenu("div-off");
        setStyleMenuButton("div-on-flex");
    };

    const changeStyleMenuxB = () => {
        console.log("menu-action-B-menu");

        setStyle("pading-card-active");

        setStyleA("");
        setStylea("table-off");

        setStyleB("nav-border-bottom-active");
        setStyleb("table-on");

        setStyleC("");
        setStylec("table-off");

        setStyleD("");
        setStyled("table-off");

        setStylex("table-on");

        setStyleMenu("div-off");
        setStyleMenuButton("div-on-flex");
    };

    const changeStyleMenuxC = () => {
        console.log("menu-action-C-menu");

        setStyle("pading-card-active");

        setStyleA("");
        setStylea("table-off");

        setStyleB("");
        setStyleb("table-off");

        setStyleC("nav-border-bottom-active");
        setStylec("table-on");

        setStyleD("");
        setStyled("table-off");

        setStylex("table-on");

        setStyleMenu("div-off");
        setStyleMenuButton("div-on-flex");
    };

    const changeStyleMenuxD = () => {
        console.log("menu-action-D-menu");

        setStyle("pading-card-active");

        setStyleA("");
        setStylea("table-off");

        setStyleB("");
        setStyleb("table-off");

        setStyleC("");
        setStylec("table-off");

        setStyleD("nav-border-bottom-active");
        setStyled("table-on");

        setStylex("table-on");

        setStyleMenu("div-off");
        setStyleMenuButton("div-on-flex");
    };

    const changeStyleXMenu = () => {
        console.log("menu-action-X");

        setStyle("");

        setStyleA("");
        setStylea("table-off");

        setStyleB("");
        setStyleb("table-off");

        setStyleC("");
        setStylec("table-off");

        setStyleD("");
        setStyled("table-off");

        setStylex("table-off");

        setStyleMenu("div-off");
        setStyleMenuButton("div-on-flex");
    };

    const changeStyleMenuDivx = () => {
        console.log("action-options");

        if(styleMenu === 'div-on-flex'){
            setStyleMenu("div-off");
            setStyleMenuButton("div-on-flex");
        }
    };

    return(
        <div className="cont-prod-prin" onClick={changeStyleMenuDivx}>
            <div className="cont-prin">
                <div className={oscuro + " header-prod-prin " + oscuroFont}>
                    <div className="title-head-prod">
                        <h2 className="title-prod"><span className="icon icon-prod"><ion-icon name="cube-outline"></ion-icon></span>PRODUCTOS</h2>
                    </div>
                    <div className="cont-buttons-prod">
                        <button type="button" onClick={() => toggle_101()} className="btn btn-color-principal" ><span className="icon-boton"><ion-icon name="add-circle-outline"></ion-icon></span>Agregar</button>

                        <Modal isOpen={modal_101} toggle={toggle_101} className="prod-modal">
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
                                                    <Container className={classes.conatiner}>
                                                        <Card>
                                                            <h2 className={classes.title}>Ingrese el nombre de producto y genere un QR unico</h2>
                                                            <CardContent>
                                                                <Grid container spacing={2}>
                                                                    <div className="cont-qr-flex">
                                                                        <div className="cont-qr-flex-left">
                                                                            <TextField label="Producto" onChange={(e) => setText(e.target.value)}/>
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

                        <button type="button" onClick={ModoOScuro} className={oscuroButton + " btn btn-color-principal btn-disabled"}><span className="icon-boton"><ion-icon name="moon-outline"></ion-icon></span>Modo Oscuro</button>
                        <button type="button" onClick={ModoClaro} className={oscuroButtonOn + " btn btn-color-principal btn-disabled"}><span className="icon-boton"><ion-icon name="sunny-outline"></ion-icon></span>Modo Claro</button>
                    </div>
                </div>

                <div className={style + " body-prod-prin " + oscuro + " " + oscuroFont}>
                    <nav className="nav-cont">
                        <div className="icon-nav">
                                <span className="icon icon-prod-nav-prin">
                                    <ion-icon name="git-merge-outline"></ion-icon>
                                </span><h3 className="h3-nav-icon">TABLAS</h3>
                        </div>
                        <div className="menu-desplegar">
                            <ul className="nav-ul">
                                <li className="nav-li">
                                    <a className={styleMenuButton + " nav-link"} href="#" onClick={changeStyleMenu}><span className="icon icon-prod-nav"><ion-icon name="ellipsis-vertical-outline"></ion-icon></span>Menú</a>
                                    <a className={styleMenu + " nav-link"} href="#" onClick={changeStyleMenux}><span className="icon icon-prod-nav"><ion-icon name="ellipsis-vertical-outline"></ion-icon></span>Menú</a>
                                </li>
                            </ul>
                        </div>
                        <ul className="nav-ul nav-ul-desplegable nav-ul-desplegable-on">
                            <li className="nav-li">
                                <a className={styleA + " nav-link"} href="#" onClick={changeStyleA}><span className="icon icon-prod-nav"><ion-icon name="apps-outline"></ion-icon></span>Todos</a>
                            </li>
                            <li className="nav-li">
                                <a className={styleB + " nav-link"} href="#" onClick={changeStyleB}><span className="icon icon-prod-nav"><ion-icon name="checkmark-circle-outline"></ion-icon></span>Activos</a>
                            </li>
                            <li className="nav-li">
                                <a className={styleC + " nav-link"} href="#" onClick={changeStyleC}><span className="icon icon-prod-nav"><ion-icon name="layers-outline"></ion-icon></span>Categorias</a>
                            </li>
                            <li className="nav-li">
                                <a className={styleD + " nav-link"} href="#" onClick={changeStyleD}><span className="icon icon-prod-nav"><ion-icon name="close-circle-outline"></ion-icon></span>Inactivos</a>
                            </li>
                            <li className={stylex + " nav-li"}>
                                <a className=" nav-link" href="#" onClick={changeStyleX}><span className="icon icon-prod-nav"><ion-icon name="close-outline"></ion-icon></span>Cerrar</a>
                            </li>
                        </ul>
                    </nav>

                    <ul className={styleMenu + " nav-ul nav-ul-desplegable-off"}>
                        <li className="nav-li nav-li-desplegable">
                            <a className={styleA + " nav-link"} href="#" onClick={changeStyleMenuxA}><span className="icon icon-prod-nav"><ion-icon name="apps-outline"></ion-icon></span>Todos</a>
                        </li>
                        <li className="nav-li nav-li-desplegable">
                            <a className={styleB + " nav-link"} href="#" onClick={changeStyleMenuxB}><span className="icon icon-prod-nav"><ion-icon name="checkmark-circle-outline"></ion-icon></span>Activos</a>
                        </li>
                        <li className="nav-li nav-li-desplegable">
                            <a className={styleC + " nav-link"} href="#" onClick={changeStyleMenuxC}><span className="icon icon-prod-nav"><ion-icon name="layers-outline"></ion-icon></span>Categorias</a>
                        </li>
                        <li className="nav-li nav-li-desplegable">
                            <a className={styleD + " nav-link"} href="#" onClick={changeStyleMenuxD}><span className="icon icon-prod-nav"><ion-icon name="close-circle-outline"></ion-icon></span>Inactivos</a>
                        </li>
                        <li className={stylex + " nav-li nav-li-desplegable"}>
                            <a className=" nav-link" href="#" onClick={changeStyleXMenu}><span className="icon icon-prod-nav"><ion-icon name="close-outline"></ion-icon></span>Cerrar</a>
                        </li>
                    </ul>

                    <div id="item-table-01" className={stylea + " " + oscuroCardsFont}>
                        <TableProductos/>
                    </div>
                    <div id="item-table-01" className={styleb  + " " + oscuroCardsFont}>
                        <TableProductosActive/>
                    </div>
                    <div id="item-table-02" className={stylec  + " " + oscuroCardsFont}>
                        <TableProductosCatPrin/>
                    </div>
                    <div id="item-table-03" className={styled  + " " + oscuroCardsFont}>
                        <TableProductosInactivos/>
                    </div>

                </div>

                <div className="footer-prod-prin">

                </div>

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
export default Productos;