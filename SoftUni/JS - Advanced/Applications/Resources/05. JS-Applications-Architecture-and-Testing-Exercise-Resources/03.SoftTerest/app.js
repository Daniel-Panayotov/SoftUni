import { showCreate } from './src/create.js';
import { showDashBoard } from './src/dashboard.js';
import { showDetails } from './src/details.js';
import { showHome } from './src/home.js';
import { showLogin } from './src/login.js';
import { logoutUser } from './src/logout.js';
import { navAccess } from './src/nav.js';
import { showRegister } from './src/register.js';

const views = {
	home: showHome,
	login: showLogin,
	logout: logoutUser,
	create: showCreate,
	details: showDetails,
	navAccess: navAccess,
	register: showRegister,
	dashboard: showDashBoard,
};

const ctx = {
	showViews,
};

document.querySelector('nav').addEventListener('click', event => {
	if (event.target.tagName == 'A') {
		const id = event.target.id;
		showViews(id);
	}
});

document.getElementById('home').addEventListener('click', () => showHome(ctx));

function showViews(name, id) {
	const view = views[name];
	if (typeof view == 'function') {
		view(ctx, id);
	}
}

showHome(ctx);

//4:30h
