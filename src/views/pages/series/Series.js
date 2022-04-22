import React, { useEffect } from "react";
import PropTypes from 'prop-types';

export default function Series({ onSeries }) {

	return (
		<div className="container">
			<div className="row justify-content-between">
				{onSeries?.map((s, i) => {
					return (
						<a
							key={i}
							className="btn btn--secondary col-12 col-xl-2 d-flex justify-content-center xxs-offset-bottom-1 lg-offset-bottom-0"
							href={`/${s}/quotes`}
						>
							{s.replaceAll('_', ' ').toUpperCase()}
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
