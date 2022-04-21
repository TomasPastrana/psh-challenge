import React from "react";
import PropTypes from 'prop-types';

export default function Series({ onSeries }) {

	return (
		<div className="container">
			<div className="row justify-content-between">
				{onSeries?.map((s, i) => {
					return (
						<a
							key={i}
							className="btn btn--secondary col-sm-2 d-flex justify-content-center"
							href={`/${s}/quotes`}
						>
							{s.replace('_', ' ').toUpperCase()}
						</a>
					)
				})}
			</div>
		</div>
	)
}

Series.propTypes = {
	onSeries: PropTypes.array,
};
