import axios from "axios";

const CancelToken = axios.CancelToken;
const source = CancelToken.source(); //eslint-disable-line
let cancel;

export const config = (name, args) => {
	return {
		async: true,
		crossDomain: true,
		method: 'get',
		url: process.env.REACT_APP_API_ENDPOINT + name,
		data: {
			name: name,
			args: args || null,
			session: null
		},
	};
};

export const cancelPost = () => {
	cancel();
}
