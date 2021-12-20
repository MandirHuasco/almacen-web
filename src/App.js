import React, {useState} from "react";

import img001 from './img/Login-Almacen.png';
import img002 from './img/almacen-img-01.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faFileExcel } from "@fortawesome/free-solid-svg-icons";
import './App.css';

const eye = <FontAwesomeIcon icon={faEye} />;
const exclamation = <FontAwesomeIcon icon={faFileExcel} />;

function App() {

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
    };

  return (
      <div className="App-almacen">
        <div className="background-image bg-img-almacen">
          <div className="sub-background image-01">
            <div className="sub-background image-02"></div>
          </div>
        </div>

          <div className="cont-body-login-almacen">
              <div className="cont-form-almacen">
                  <img src={img002} className="img-login-almacen"/>
              </div>


              <div className="cont-form cont-form-almacen">
                  <div className="mini-logo-01 img-login-icon">
                      <img src={img001} className="img-mini-logo-01 login-almacen-icon"/>
                  </div>
                  <div className="cont-form-sub">
                      <form action="/Principal">
                          <div className="input-form">
                              <input type="email" className="input-form-almacen" placeholder="Correo" required/>
                          </div>
                          <div className="input-form">
                              <input type={passwordShown ? "text" : "password"} className="input-form-almacen" placeholder="Password" required/>
                              <i className="eye" onClick={togglePasswordVisiblity}>{eye}</i>
                          </div>
                          <div className="input-form check-align">
                              <label className="label-check">Recordarme</label>
                              <input type="checkbox" className="check-form check-form-almacen"/>
                          </div>
                          <div className="input-form">
                              <input type="submit" className="submit-form input-submit-almacen" value="INGRESAR"/>
                          </div>
                      </form>
                      {/**
                       Validar usuario,
                       si el usuario es
                       incorrecto mostrar
                       el sgte error:
                       **/}
                      <div className="input-form">
                          <div className="error-report error-report-almacen">
                              <i className="exclamation">{exclamation}</i>
                              Usuario incorrecto
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
