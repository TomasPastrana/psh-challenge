import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { AppContext } from "context/provider";
// images
import breaking_bad from "assets/img/series/breaking_bad.webp";
import dark from "assets/img/series/dark.webp";
import game_of_thrones from "assets/img/series/game_of_thrones.jpeg";
import money_heist from "assets/img/series/money_heist.jpg";

export default function Series({ onSeries }) {

	const {
		setEditedSerie,
		setOpenPopup,
	} = useContext(AppContext);

	function getImage(serie) {
		switch (serie.value.replaceAll(' ', '_').toLowerCase()) {
			case 'breaking_bad':
				return breaking_bad;

			case 'dark':
				return dark;

			case 'game_of_thrones':
				return game_of_thrones;

			case 'money_heist':
				return money_heist;

			default:
				return null;
		}
	}

	function editSerie(serie) {
		setEditedSerie(serie);
		setOpenPopup(true);
	}

	return (
		<>
			<div className="container">
				<div className="row flex-column flex-md-row justify-content-center">
					{onSeries?.map((s, i) => {
						if (!s.userCreated) {
							return (
								<a
									key={i}
									className="psh-card psh-card--type-1 psh-card--type-2 psh-card--background-image col-12 col-xl-2 d-flex align-items-center justify-content-center text--center xxs-offset-bottom-1 lg-offset-bottom-0"
									style={{ backgroundImage: `url(${getImage(s)})` }}
									href={`/${s.value.replaceAll(' ', '_').toLowerCase()}/quotes`}
								>
									{s.value}
								</a>
							)
						} else {
							return (
								<div
									key={i}
									className="psh-card psh-card--type-1 psh-card--type-2 psh-card--background-image col-12 col-xl-2 d-flex align-items-center justify-content-center text--center xxs-offset-bottom-1 lg-offset-bottom-0"
								>
									{s.value}
									{<i className="pl-1 text--link icon--pencil" onClick={() => editSerie(s)} />}
								</div>
							)
						}
					})}
				</div>
			</div>
		</>
	)
}

Series.propTypes = {
	onSeries: PropTypes.array,
};
