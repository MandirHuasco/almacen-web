import React, {useState} from "react";
import {faTicketAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Badge, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const ticket = <FontAwesomeIcon icon={faTicketAlt} />;

function Page2() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_101, setModal_101] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_102, setModal_102] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_103, setModal_103] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_104, setModal_104] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_105, setModal_105] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_106, setModal_106] = useState(false);

    const toggle_101 = () => setModal_101(!modal_101);
    const toggle_102 = () => setModal_102(!modal_102);
    const toggle_103 = () => setModal_103(!modal_103);
    const toggle_104 = () => setModal_104(!modal_104);
    const toggle_105 = () => setModal_105(!modal_105);
    const toggle_106 = () => setModal_106(!modal_106);

    const list = document.querySelectorAll('.list');
    function activeLink(){
        list.forEach((item) =>
            item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) => item.addEventListener('click',activeLink));

    return (
        <div className="App App-prin">
            <div className="background-image background-image-prin background-image-prin-almacen">
            </div>

            <div className="navigation">
                <ul className="ul-menu">
                    <li className="list active">
                        <a href="#">
                            <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                            <span className="title">Home</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                            <span className="title">Profile</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon"><ion-icon name="chatbubbles-outline"></ion-icon></span>
                            <span className="title">Messages</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon"><ion-icon name="settings-outline"></ion-icon></span>
                            <span className="title">Setting</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon"><ion-icon name="help-outline"></ion-icon></span>
                            <span className="title">Help</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                            <span className="title">Password</span>
                        </a>
                    </li>
                    <li className="list Sign-off">
                        <a href="#">
                            <span className="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                            <span className="title">Sign Out</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Page2;