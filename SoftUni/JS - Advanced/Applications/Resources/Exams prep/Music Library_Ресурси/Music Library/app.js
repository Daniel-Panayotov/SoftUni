import page from './node_modules/page/page.mjs';
import { addRender } from './src/middlewares/addRender.js';
import { setUserDataInCtx } from './src/middlewares/userData.js';
import { showCreate } from './src/templates/createAlbum.js';
import { showDashboard } from './src/templates/dashboard.js';
import { showDetails } from './src/templates/details.js';
import { showEdit } from './src/templates/edit.js';
import { showHome } from './src/templates/home.js';
import { showLogin } from './src/templates/login.js';
import { showRegister } from './src/templates/register.js';

page(setUserDataInCtx);
page(addRender);

page('/index.html', '/');
page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/dashboard', showDashboard);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);

page.start();

//2:10h
//9:10
