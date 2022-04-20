import axios from "axios";
//Services
import AuthService from "services/AuthService";

const CancelToken = axios.CancelToken;
const source = CancelToken.source(); //eslint-disable-line
let cancel;

export const configPost = (method = 'post', name, data, endpoint = process.env.REACT_APP_API_ENDPOINT_CHECKOUT) => {
	let url = name ? endpoint + name : endpoint; //eslint-disable-line
	let tkn = AuthService.getToken();
	return {
		async: true,
		crossDomain: false,
		method: method,
		url: name ? endpoint + name : endpoint,
		data: data,
		headers: {
			"Authorization": 'Bearer ' + tkn,
			"Content-Type": "application/json"
		},
		cancelToken: new CancelToken(function executor(c) {
			// An executor function receives a cancel function as a parameter "Accept-Language": locale.navigator_lang
			cancel = c;
		})
	};
};

export const cancelPost = () => {
	cancel();
}
