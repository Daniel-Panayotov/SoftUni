import { getUserData, removeUserData } from '../util.js';

const host = 'http://localhost:3030';

async function request(method, url, body) {
	const userData = getUserData();

	let options = {
		method,
		headers: {},
	};

	if (userData != undefined) {
		options.headers['X-Authorization'] = userData.accessToken;
	}

	if (body) {
		options.headers['Content-Type'] = 'application/json';
		options.body = JSON.stringify(body);
	}

	try {
		const res = await fetch(host + url, options);

		let result;

		if (res.status != 204) {
			result = await res.json();
		}

		if (!res.ok) {
			if (res.status == 403) {
				removeUserData();
			}
			throw result;
		}

		return result;
	} catch (error) {
		throw error;
	}
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');
