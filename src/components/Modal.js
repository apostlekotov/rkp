import React, {useContext, useState} from "react";
import AlertContext from "../context/alert/AlertContext";
import Alert from "./Alert";

const Modal = ({ show, setShow }) => {
    const alertContext = useContext(AlertContext);

    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");

    const confirm = () => {
        if (name && phone) {
            alertContext.setAlert(999, {
                type: "success",
                title: "Дякуємо за замовлення!",
                text: "Наш менеджер звяжеться з Вами за лічені хвилини."
            });
        } else {
            alertContext.setAlert(999, {
                type: "danger",
                title: "Error",
                text: "Missing name or phone"
            });
        }
    };

    return show && (
        <>
            <div className="modal">
                <div className="modal-form">
                    <div className="modal-header">
                        <span>Введіть будь ласка свої дані</span>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShow(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <label>Ім'я*</label>
                        <input
                            className="form-control"
                            placeholder='Іван Тобілевич'
                            required
                            onChange={name => setName(name.target.value)}
                        />
                        <label>Телефон*</label>
                        <input
                            className="form-control"
                            placeholder="+38(000) 000 00 00"
                            required
                            onChange={phone => setPhone(phone.target.value)}
                        />
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-lg btn-primary" onClick={ confirm } >Замовити</button>
                    </div>
                </div>
            </div>
            <AlertContext.Consumer>
                {({ alerts }) => (
                    <div className="alert-container">
                        {alerts.map(item => {
                            const { data } = item;
                            return <Alert
                                key={item.id} {...{ data }}
                            />;
                        })}
                    </div>
                )}
            </AlertContext.Consumer>
        </>
    );
}

export default Modal;