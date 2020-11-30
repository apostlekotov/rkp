import React, {useState} from "react";
import AlertContext from "./AlertContext";
import Alert from '../../components/Alert';

// const timeout = 5555;

const AlertState = (props) => {
    const [alerts, setAlerts] = useState([])

    const setAlert = (id, data) => {
        setAlerts([{ id: id, data }]);
        // setTimeout(() => removeAlert(id), timeout);
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
            <AlertContext.Consumer>
                {({ alerts }) => (
                    <div className='alert-container'>
                        {alerts.map((item) => {
                            const { data } = item;
                            return <Alert key={item.id} {...{ data }} />;
                        })}
                    </div>
                )}
            </AlertContext.Consumer>
        </AlertContext.Provider>
    );
}

export default AlertState;
