import { removeUserData } from '../util.js';
import { get, post } from './api.js';

const endpoints = {
	register: '/users/register',
	login: '/users/login',
	logout: '/users/logout',
};

export async function registerUser(data) {
	const result = await post(endpoints.register, data);
	return result;
}

export async function loginUser(data) {
	const result = await post(endpoints.login, data);
	return result;
}

export async function logoutUser(ctx) {
	await get(endpoints.logout);
	removeUserData();
	ctx.page.redirect('/dashboard');
}
