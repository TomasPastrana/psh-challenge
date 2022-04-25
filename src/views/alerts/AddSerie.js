import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';

import pshLogo from "../../assets/img/logo_red_psh.svg";

export default function AddSerie(props) {

	const [modalOne, setModalOne] = useState(false);
	const [values, setValues] = useState({
		id: 0,
		value: '',
		img: null,
	});

	useEffect(() => {
		if (props) {
			setModalOne(props.onOpen);
			setValues(v => ({...v, id: props.onCount}));
		}
	}, [props]);

	function closeModal() {
		props.onClose();
		setModalOne(false);
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setValues(v => ({ ...v, [name]: value.replaceAll(' ', '_') }));
	}

	function saveSerie() {
		let storedSeries = JSON.parse(localStorage.getItem('series')) || [];
		try {
			storedSeries.push(values);
			localStorage.setItem('series', JSON.stringify(storedSeries));
		} catch (error) {
			console.log(error);
		} finally {
			props.onNewSeries(storedSeries);
			//closeModal();
		}
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

						<div className={'d-flex align-items-center mt-4 offset-bottom-2'}>
							<p className={'text--color-dark-blue-800 text--title3 mr-1'}>Tilte:</p>
							<input className="form-control" name="value" type="text" placeholder="Breaking Bad" aria-label="text" value={values.value} onChange={handleChange} />
						</div>
						<div className={'d-flex align-items-center mt-4 offset-bottom-2'}>
							<p className={'text--color-dark-blue-800 text--title3 mr-1'}>Image:</p>
							<input className="form-control" name="img" type="file" id="formFile" value={values.image} onChange={handleChange} />
						</div>

						<div className={'row justify-content-center flex-column-reverse flex-md-row offset-top-3'}>
                            <div className={'col-md-6'}>
                                <button type={'button'} className={'btn btn--outline full'} onClick={() => closeModal()}>Volver</button>
                            </div>
                            <div className={'col-md-6 mb-4 mb-md-0'}>
                                <button type={'button'} className={'btn btn--secondary full'} onClick={saveSerie} disabled={!values.value}>Confirmar</button>
                            </div>
                        </div>
					</div>
				</div>
			</Modal>
		</>
	)
}

AddSerie.propTypes = {
	onOpen: PropTypes.bool,
	onCount: PropTypes.number,
	onClose: PropTypes.func,
	onNewSeries: PropTypes.func,
};
