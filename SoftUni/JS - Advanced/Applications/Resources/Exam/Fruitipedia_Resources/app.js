import page from './node_modules/page/page.mjs';
import { addRender } from './src/middlewares/addRender.js';
import { setUserDataInCtx } from './src/middlewares/userData.js';
import { showCreate } from './src/views/create.js';
import { showDashboard } from './src/views/dashboard.js';
import { showDetails } from './src/views/details.js';
import { showEdit } from './src/views/edit.js';
import { showHome } from './src/views/home.js';
import { showLogin } from './src/views/login.js';
import { showRegister } from './src/views/register.js';
import { showSearch } from './src/views/search.js';

page(setUserDataInCtx);
page(addRender);

page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/dashboard', showDashboard);
page('/create', showCreate);
page('/search', showSearch);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);

page.start();
