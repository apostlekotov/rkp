import React, {useState} from "react";
import AlertContext from "./AlertContext";

const timeout = 6666;

const AlertState = (props) => {
    const [alerts, setAlerts] = useState([])

    const setAlert = (id, data) => {
        setAlerts([{ id: id, data }]);
        setTimeout(() => removeAlert(id), timeout);
    };

    const removeAlert = id => {
        setAlerts(alerts.filter(item => item.id !== id));
    };

    return (
        <AlertContext.Provider
            value={{
                alerts,
                setAlert,
                removeAlert
            }}
        >
            {props.children}
        </AlertContext.Provider>
    );
}

export default AlertState;
