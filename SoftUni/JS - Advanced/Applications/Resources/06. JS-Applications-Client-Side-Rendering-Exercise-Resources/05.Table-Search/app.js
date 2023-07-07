import { getData } from './api.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const table = document.querySelector('tbody');
const input = document.getElementById('searchField');

document.getElementById('searchBtn').addEventListener('click', search);

const trTemplate = data => html`
	<tr>
		<td>${data.firstName + ' ' + data.lastName}</td>
		<td>${data.email}</td>
		<td>${data.course}</td>
	</tr>
`;

update();

async function update() {
	const data = Object.entries(await getData());

	render(
		data.map(val => trTemplate(val[1])),
		table,
	);
}

function search() {
	const data = input.value;
	const rows = table.children;

	update();

	for (const row of rows) {
		row.className = '';
		if (data != '' && row.textContent.toLowerCase().includes(data.toLowerCase())) {
			row.className = 'select';
		}
	}

	input.value = '';
}
