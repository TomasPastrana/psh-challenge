import React, { useEffect, useState } from "react";
import Modal from 'components/Modal/Modal';

import pshLogo from "../../assets/img/logo_red_psh.svg";

export default function AddSerie(props) {

	const [modalOne, setModalOne] = useState(false);
	
	useEffect(() => {
		if (props) {
			setModalOne(props.onOpen);
		}
	}, [props]);

	function closeModal() {
		props.onClose();
		setModalOne(false);
	}

	return (
		<>
			<Modal
				show={modalOne}
				onHide={closeModal}
				className={'psh-modal--md'}
			>
				<div className={'d-flex justify-content-center'}>
					<div className={'col-md-10'}>
						<h4 className={'text--title2 text--center'}><strong>Add New Series</strong></h4>

						<div className={'text--center mt-4'}>
							<p className={'text--color-dark-blue-800 text--title3'}>
								This form'll guide you to add your own favorite series
							</p>
						</div>

						<div className={'d-flex justify-content-center mt-4 offset-bottom-2'}>
							<ul className={'psh-list psh-list--bullets text--color-dark-blue-800'}>
								<li>El proveedor no responde</li>
								<li>No tiene fondo en la tarjeta</li>
								<li>Tu tarjeta expiró</li>
							</ul>
						</div>
					</div>
				</div>
			</Modal>
		</>
	)
}