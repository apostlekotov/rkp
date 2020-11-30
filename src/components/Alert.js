import React, { useContext } from 'react';
import AlertContext from '../context/alert/AlertContext';

const Alert = ({ data: {title, text, img } }) => {
	const alertContext = useContext(AlertContext);

	return (
		<>
			<div className="modal">
				<div className='modal-form p-4'>
					<div className="container">
						<div className="row">
							<div className="col-md-12 d-flex justify-content-end">
								<button
									type='button'
									className='btn-close'
									data-dismiss='modal'
									aria-label='Close'
									onClick={alertContext.removeAlert.bind(this, 999)}
								>
								</button>
							</div>
						</div>
						<div className="msg">
							<div className="row">
								<div className="col-md-12 h3 text-center">
									{title}
								</div>
								<img src={img} alt=""/>
							</div>
							<div className="row">
								<div className="col-md-12 h5 text-center">
									{text}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Alert;
