import { getData, postData } from './api.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const menu = document.getElementById('menu');
const formInput = document.getElementById('itemText');
const form = document.querySelector('form');

form.addEventListener('submit', onSubmit);

const optionTemplate = data =>
	html`
		<option value=${data._id}>${data.text}</option>
	`;

update();

async function update() {
	const data = Object.entries(await getData());

	render(
		data.map(val => optionTemplate(val[1])),
		menu,
	);
}

async function onSubmit(e) {
	e.preventDefault();

	const text = formInput.value;

	if (text != '') {
		await postData({ text });
	}

	form.reset();
	update();
}
