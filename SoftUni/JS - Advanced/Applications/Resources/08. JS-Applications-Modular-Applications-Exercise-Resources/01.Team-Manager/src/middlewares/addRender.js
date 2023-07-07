import { render } from '../../node_modules/lit-html/lit-html.js';
import { layout } from '../views/layout.js';

const main = document.body;

export function addRender(ctx, next) {
	ctx.render = renderView.bind(null, ctx.userData);

	next();
}

function renderView(userData, content) {
	render(layout(userData, content), main);
}
