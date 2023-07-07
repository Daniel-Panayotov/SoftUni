import page from './node_modules/page/page.mjs';
import { addRender } from './src/middlewares/addRender.js';
import { setUserDataInCtx } from './src/middlewares/userData.js';
import { showCreate } from './src/views/createbook.js';
import { showDashboard } from './src/views/dashboard.js';
import { showDetails } from './src/views/details.js';
import { showEdit } from './src/views/edit.js';
import { showLogin } from './src/views/login.js';
import { showMyBooks } from './src/views/mybooks.js';
import { showRegister } from './src/views/register.js';

page(setUserDataInCtx);
page(addRender);

page('/index.html', '/');
page('/', showDashboard);
page('/login', showLogin);
page('/register', showRegister);
page('/createBook', showCreate);
page('/myBooks', showMyBooks);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);

page.start();

//2:10h
