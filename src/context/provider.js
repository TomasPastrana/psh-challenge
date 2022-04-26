import React, { createContext, useState } from 'react';
// services

export default function Provider(props) {

	const [loading, setLoading] = useState(false);
	const [layoutType, setLayoutType] = useState('');
	const [editedSerie, setEditedSerie] = useState();
	const [openPopup, setOpenPopup] = useState(false);

	//provider vars
	const provider = {
		editedSerie,
		layoutType,
		loading,
		openPopup,
		setEditedSerie,
		setLayoutType,
		setLoading,
		setOpenPopup,
	};

	return (
		<>
			<AppContext.Provider
				value={provider}>
				{props.children}
			</AppContext.Provider>
		</>
	)
}

export const AppContext = createContext();
