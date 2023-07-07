import { get, post } from './api.js';

const endpoints = {
	register: '/users/register',
	login: '/users/login',
	logout: '/users/logout',
};

export async function loginUser(loginDetails) {
	const data = await post(endpoints.login, loginDetails);

	return data;
}

export async function registerUser(loginDetails) {
	const data = await post(endpoints.register, loginDetails);

	return data;
}

export async function logoutUser() {
	await get(endpoints.logout);
}
