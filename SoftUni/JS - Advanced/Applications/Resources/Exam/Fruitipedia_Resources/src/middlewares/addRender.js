import { render } from '../../node_modules/lit-html/lit-html.js';
import { layoutTemplate } from '../views/layout.js';

const main = document.querySelector('#wrapper');

export function addRender(ctx, next) {
	const userData = ctx.userData;
	ctx.render = renderView.bind(null, userData);

	function renderView(userData, content) {
		render(layoutTemplate(content, userData, ctx), main);
	}
	next();
}
