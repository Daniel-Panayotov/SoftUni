import page from './node_modules/page/page.mjs';
import { logoutUser } from './src/data/auth.js';
import { addRender } from './src/middlewares/addRender.js';
import { userSession } from './src/middlewares/userdata.js';
import { showBrowse } from './src/views/browse.js';
import { showDetails } from './src/views/details.js';
import { showEdit } from './src/views/edit.js';
import { showHome } from './src/views/home.js';
import { showLogin } from './src/views/login.js';
import { showMyTeams } from './src/views/myteams.js';
import { showTeam } from './src/views/newteam.js';
import { showRegister } from './src/views/register.js';

page(userSession);
page(addRender);
page('index.html', '/');
page('/', showHome);
page('/browse', showBrowse, { querystring: true });
page('/newteam', showTeam);
page('/myteams', showMyTeams);
page('/edit/:id', showEdit);
page('/details/:id', showDetails);
page('/login', showLogin);
page('/logout', logoutUser);
page('/register', showRegister);

page.start();

//2:50h
