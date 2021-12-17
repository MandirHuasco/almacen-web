import React from "react";
import Principal from "./Principal";

function Productos() {
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