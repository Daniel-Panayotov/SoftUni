import { showHome } from './home.js';
import { showLogin } from './login.js';
import { logoutUser, navAccess } from './nav.js';
import { showRegister } from './register.js';
import { showAddMovies } from './addmovies.js';
import { actionDispatcher, showDetails } from './details.js';
import { editMovie } from './edit.js';

let [welcome, logout, login, register] = document.querySelectorAll('.nav-link');

document.querySelector('#edit-movie form button').addEventListener('click', editMovie);
document.getElementById('movie-example').addEventListener('click', actionDispatcher);
document.getElementById('add-movie-button').addEventListener('click', showAddMovies);
document.querySelector('#container nav a').addEventListener('click', showHome);
document.getElementById('movies-list').addEventListener('click', showDetails);
register.addEventListener('click', showRegister);
logout.addEventListener('click', logoutUser);
login.addEventListener('click', showLogin);

document.getElementById('views').replaceChildren();

showHome();
navAccess();
