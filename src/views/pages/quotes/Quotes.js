import React, { useEffect, useState } from "react";
import SeriesService from "../../../services/SeriesService";

export default function Quotes() {

	const url = window.location.pathname;
    const seriesName = url.substring(url.indexOf('/', 0) + 1).split('/')[0];

	const title = `Famous ${seriesName.replace('_', ' ').toUpperCase() || 'Series'} Quotes`;

	useEffect(() => {
		SeriesService.getQuotesBySeries()
	}, []);

	return (
		<div className="container">
			<h2 className="h4 text--primary pt-3">{title}</h2>
		</div>
	)
}