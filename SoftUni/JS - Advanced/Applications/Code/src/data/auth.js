import { setLocalStorage } from '../util.js';
import { get, post } from './api.js';

export async function register(body) {
	const data = await post('http://localhost:3030/users/register', body);

	setLocalStorage(data);
}

export async function login(body) {
	const data = await post('http://localhost:3030/users/login', body);

	setLocalStorage(data);
}

export async function logout() {
	await get('http://localhost:3030/users/logout');

	localStorage.clear();
}
