async function request(type, body) {
	try {
		let options = {
			method: type,
			headers: {},
		};

		if (body) {
			options.headers['Content-Type'] = 'application/json';
			options.body = JSON.stringify(body);
		}

		const res = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', options);

		if (!res.ok) {
			const error = await res.json();
			throw error;
		}

		return res.json();
	} catch (error) {
		console.log(error.message);
	}
}

export const getData = request.bind(null, 'get');
export const postData = request.bind(null, 'post');
