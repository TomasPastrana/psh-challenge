import axios from 'axios';
import * as BaseService from './BaseService';

const SeriesService = {
	getTVSeries: () => {
		return axios(BaseService.config('/series'));
	},
	getQuotesBySeries: (name, all = true) => {
		let args = {
			series: name,
			all: all,
		}
		return axios(BaseService.config('/quote', args));
	},
};

export default SeriesService;
