export async function getData() {
	try {
		const res = await fetch('http://localhost:3030/jsonstore/advanced/table');

		if (!res.ok) {
			const error = await res.json();
			throw error;
		}

		return res.json();
	} catch (error) {
		console.log(error.message);
	}
}
