import { render } from '../../node_modules/lit-html/lit-html.js';
import { logoutUser } from '../data/auth.js';
import { layoutTemplate } from '../templates/layout.js';

const main = document.querySelector('#wrapper');

export function addRender(ctx, next) {
	const userData = ctx.userData;
	ctx.render = renderView.bind(null, userData, logoutUser);

	function renderView(userData, logout, content) {
		render(layoutTemplate(userData, logout, content, ctx), main);
	}
	next();
}
