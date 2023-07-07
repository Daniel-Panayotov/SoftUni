const host = 'http://localhost:3030';

export async function request(type, url, body) {
	try {
		const userData = JSON.parse(localStorage.getItem('userData'));

		let options = {
			method: type,
			headers: {},
		};

		if (userData) {
			options.headers['X-Authorization'] = userData.token;
		}

		if (body) {
			options.headers['Content-Type'] = 'application/json';
			options.body = JSON.stringify(body);
		}

		const res = await fetch(url, options);

		if (!res.ok) {
			const error = await res.json();
			if (res.status == 403) {
				localStorage.clear();
			}
			throw error;
		}

		if (res.status != 204) {
			return res.json();
		}
	} catch (error) {
		alert(error.message);
		throw error;
	}
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');
