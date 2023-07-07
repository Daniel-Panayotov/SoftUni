import { html } from '../../node_modules/lit-html/lit-html.js';
import { createFruit } from '../data/data.js';
import { createSubmitHandler } from '../util.js';

const createTemplate = handler => html`
	<section id="create">
		<div class="form">
			<h2>Add Fruit</h2>
			<form class="create-form" @submit=${handler}>
				<input type="text" name="name" id="name" placeholder="Fruit Name" />
				<input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image" />
				<textarea
					id="fruit-description"
					name="description"
					placeholder="Description"
					rows="10"
					cols="50"></textarea>
				<textarea
					id="fruit-nutrition"
					name="nutrition"
					placeholder="Nutrition"
					rows="10"
					cols="50"></textarea>
				<button type="submit">Add Fruit</button>
			</form>
		</div>
	</section>
`;

export function showCreate(ctx) {
	ctx.render(createTemplate(createSubmitHandler(onCreate)));

	async function onCreate(data) {
		const isEmpty = Object.values(data).find(v => v == '') == '';

		try {
			if (isEmpty) {
				throw new Error('Fields must be filled');
			}
			await createFruit(data);

			ctx.page.redirect('/dashboard');
		} catch (err) {
			window.alert(err.message);
		}
	}
}
