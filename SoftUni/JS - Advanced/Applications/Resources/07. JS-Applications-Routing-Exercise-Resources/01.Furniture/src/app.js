import page from '../node_modules/page/page.mjs';
import { showCreate } from './create.js';
import { showDashBoard } from './dashboard.js';
import { logoutUser } from './data/auth.js';
import { showDetails } from './details.js';
import { showEdit } from './edit.js';
import { showLogin } from './login.js';
import { addRender, navAccess, navButtonHighlight } from './middleware.js';
import { showMyFurniture } from './myFurniture.js';
import { showRegister } from './register.js';
import { removeUserData } from './util.js';

//1h

document.getElementById('logoutBtn').addEventListener('click', () => {
	logoutUser();
	removeUserData();
	page.redirect('/');
});

page(addRender);
page(navAccess);
page(navButtonHighlight);
page('/', showDashBoard);
page('/create', showCreate);
page('/my-furniture', showMyFurniture);
page('/login', showLogin);
page('/register', showRegister);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);

page.start();
