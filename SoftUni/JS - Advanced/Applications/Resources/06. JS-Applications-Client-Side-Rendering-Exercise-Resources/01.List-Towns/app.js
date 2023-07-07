import { html, render } from './node_modules/lit-html/lit-html.js';
const root = document.getElementById('root');
const form = document.querySelector('form');

form.addEventListener('submit', renderTowns);

function renderTowns(e) {
	e.preventDefault();
	const formData = new FormData(form);
	let data = Object.fromEntries(formData.entries()).towns;

	const towns = data.split(', ');

	render(
		towns.map(town => ulTemplate(town)),
		root,
	);

	form.reset();
}

const ulTemplate = town => html`
	<ul>
		<li>${town}</li>
	</ul>
`;

const alTemplate = towns => html`
	<ul>
		${towns.map(
			town =>
				html`
					<li>${town}</li>
				`,
		)}
	</ul>
`;
