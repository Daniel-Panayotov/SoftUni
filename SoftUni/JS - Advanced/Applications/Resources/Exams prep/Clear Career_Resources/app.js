import page from './node_modules/page/page.mjs';
import { addRender } from './src/middlwares.js/addRender.js';
import { setUserDataInCtx } from './src/middlwares.js/userData.js';
import { showCreate } from './src/views/createoffer.js';
import { showDashBoard } from './src/views/dashboard.js';
import { showDetails } from './src/views/details.js';
import { showEdit } from './src/views/edit.js';
import { showHome } from './src/views/home.js';
import { showLogin } from './src/views/login.js';
import { showRegister } from './src/views/register.js';

page(setUserDataInCtx);
page(addRender);

page('/index.html', '/');
page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/createOffer', showCreate);
page('/dashboard', showDashBoard);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);

page.start();
//2:50h
