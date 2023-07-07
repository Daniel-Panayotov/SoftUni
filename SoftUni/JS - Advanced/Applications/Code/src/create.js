import { postIdea } from './data/data.js';
import { addSubmitListener } from './util.js';

const createSection = document.getElementById('create-page');
const form = createSection.querySelector('form');
const views = document.getElementById('views');

let ctx = null;

export function showCreate(newCtx) {
	views.replaceChildren(createSection);
	ctx = newCtx;
}

addSubmitListener(form, onCreate);

async function onCreate(data) {
	const { title, description, imageURL } = data;
	try {
		if (title.length < 6 || description.length < 10 || imageURL.length < 5) {
		}
		await postIdea({ title, description, img: imageURL });
		ctx.showViews('dashboard');
	} catch (error) {
		console.log(error);
	}

	form.reset();
}
