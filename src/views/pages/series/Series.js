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
							className="psh-card psh-card--type-1 psh-card--type-2 col-12 col-xl-2 d-flex align-items-center justify-content-center text--center xxs-offset-bottom-1 lg-offset-bottom-0"
							href={`/${s.value.replaceAll(' ', '_').toLowerCase()}/quotes`}
						>
							{s.value}
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
