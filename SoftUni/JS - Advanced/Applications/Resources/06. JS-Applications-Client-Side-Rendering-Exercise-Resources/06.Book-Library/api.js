async function request(type, url, body) {
	try {
		let options = {
			method: type,
			headers: {},
		};

		if (body) {
			options.headers['Content-Type'] = 'application.json';
			options.body = JSON.stringify(body);
		}

		const res = await fetch('http://localhost:3030/jsonstore/collections/books' + url, options);

		if (!res.ok) {
			const error = await res.json();
			throw error;
		}

		if (res.status != 204) {
			return res.json();
		}
	} catch (error) {
		console.log(error.message);
	}
}

export const get = request.bind(null, 'get');

export const post = request.bind(null, 'post');

export const put = request.bind(null, 'put');

export const del = request.bind(null, 'delete');
