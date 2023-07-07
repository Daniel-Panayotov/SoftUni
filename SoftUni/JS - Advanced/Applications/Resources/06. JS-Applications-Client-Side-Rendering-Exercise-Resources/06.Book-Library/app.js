import { get } from './api.js';
import { render } from './node_modules/lit-html/lit-html.js';
import { tableTemplate } from './templates.js';

render(tableTemplate([]), document.body);

export async function update() {
	const data = Object.entries(await get(''));

	render(tableTemplate(data), document.body);
}
