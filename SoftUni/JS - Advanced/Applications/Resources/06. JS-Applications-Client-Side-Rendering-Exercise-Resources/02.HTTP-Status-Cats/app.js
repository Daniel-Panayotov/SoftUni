import { cats } from './catSeeder.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const catSection = document.getElementById('allCats');

catSection.addEventListener('click', event => {
	if (event.target.className == 'showBtn') {
		toggle(event);
	}
});

export const catCodeTemplate = cats => html`
	<ul>
		${cats.map(
			cat => html`
				<li>
					<img
						src=${`./images/${cat.imageLocation}.jpg`}
						width="250"
						height="250"
						alt="Card image cap" />
					<div class="info">
						<button class="showBtn">Show status code</button>

						<div class="status" id=${cat.id} style="display: none">
							<h4>Status Code: ${cat.statusCode}</h4>
							<p>${cat.statusMessage}</p>
						</div>
					</div>
				</li>
			`,
		)}
	</ul>
`;

renderCats();

function toggle(event) {
	const status = event.target.parentElement.getElementsByClassName('status')[0];
	if (status.style.display == 'block') {
		status.style.display = 'none';
		event.target.textContent = 'Show status code';
	} else {
		status.style.display = 'block';
		event.target.textContent = 'Hide status code';
	}
}

function renderCats() {
	render(catCodeTemplate(cats), catSection);
}
