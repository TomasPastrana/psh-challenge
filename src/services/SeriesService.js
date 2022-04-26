import axios from 'axios';
import * as BaseService from './BaseService';

const SeriesService = {
	getTVSeries: () => {
		return axios(BaseService.config('/series'));
	},
	getQuotesBySeries: (name, all = true) => {
		return axios(BaseService.config(`/quote/?series=${name}&all=${all}`));
		/* `/quote?series=${name}&all=${all}` */
	},
	getRandomQuotes: () => {
		return axios(BaseService.config(`/all`));
	},
};

export default SeriesService;
