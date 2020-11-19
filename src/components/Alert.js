import React, {useContext} from "react";
import AlertContext from "../context/alert/AlertContext";

const Alert = ({ data: { type, title, text } }) => {
    const alertContext = useContext(AlertContext);
    const alertType = type ? `alert-${type}` : "";

    return (
        <>
            <div className="alert">
                <div className={"alert " + alertType}>
                    <div className="alert-heading">
                        {title}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={ alertContext.removeAlert.bind(this, 999) }>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <p><small>{text}</small></p>
                </div>
            </div>
        </>
    );
};

export default Alert