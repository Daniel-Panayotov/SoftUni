import { showHome } from './home.js';
import { navAccess } from './nav.js';
import { check, makeOptions } from './util.js';

let addMovieSection = document.getElementById('add-movie');
let views = document.getElementById('views');
let movieForm = addMovieSection.querySelector('form');

movieForm.querySelector('button').addEventListener('click', addMovie);

export function showAddMovies() {
    navAccess();
    views.replaceChildren(addMovieSection);
}

async function addMovie(e) {
    e.preventDefault();
    let movieData = new FormData(movieForm);
    let { title, description, img } = Object.fromEntries(movieData.entries());

    try {
        if (title == '' || description == '' || img == '') {
            throw new Error('fields are empty');
        }

        let options = makeOptions('post', { title, description, img });
        options.headers['X-Authorization'] = localStorage.getItem('token');

        let res = await fetch('http://localhost:3030/data/movies', options);
        check(res);
        movieForm.reset();
        showHome();
    } catch (err) {}
}
