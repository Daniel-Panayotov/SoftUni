function attachHandlers() {
    document.getElementById('loadBooks').addEventListener('click', loadBooks);
    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
    });
    document.querySelector('form button').addEventListener('click', bookAction);
    document.querySelector('tbody').addEventListener('click', actionOnBook);
}

async function loadBooks() {
    let books = document.querySelector('tbody');
    let res = await fetch('http://localhost:3030/jsonstore/collections/books');
    let data = await res.json();

    books.replaceChildren();

    Object.entries(data).forEach(([key, val]) => {
        let tr = document.createElement('tr');
        tr.dataset.id = key;
        tr.appendChild(create('td', val.title));
        tr.appendChild(create('td', val.author));
        let btns = document.createElement('td');
        btns.appendChild(create('button', 'Edit'));
        btns.appendChild(create('button', 'Delete'));
        tr.appendChild(btns);
        books.appendChild(tr);
    });
}

async function actionOnBook(e) {
    if (e.target.textContent == 'Edit') {
        document.querySelector('form h3').textContent = 'Edit FORM';
        document.querySelector('form button').textContent = 'Save';
        document.querySelector('form button').dataset.id =
            e.target.parentElement.parentElement.dataset.id;

        let [title, author] = e.target.parentElement.parentElement.querySelectorAll('td');
        let [titleInput, authorInput] = document.querySelectorAll('form input');

        titleInput.value = title.textContent;
        authorInput.value = author.textContent;
    } else if (e.target.textContent == 'Delete') {
        await fetch(
            `http://localhost:3030/jsonstore/collections/books/${e.target.parentElement.parentElement.dataset.id}`,
            { method: 'delete' }
        );
        loadBooks();
    }
}

async function bookAction(e) {
    if (e.target.textContent == 'Submit') {
        let [title, author] = document.querySelectorAll('form input');

        if (title.value.length > 0 && author.value.length > 0) {
            let book = {
                title: title.value,
                author: author.value,
            };
            let options = {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(book),
            };

            await fetch('http://localhost:3030/jsonstore/collections/books', options);

            title.value = '';
            author.value = '';
            loadBooks();
        }
    } else if (e.target.textContent == 'Save') {
        let [title, author] = document.querySelectorAll('form input');

        let data = {
            title: title.value,
            author: author.value,
        };

        let options = {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };

        await fetch(
            `http://localhost:3030/jsonstore/collections/books/${e.target.dataset.id}`,
            options
        );
        delete e.target.dataset.id;
        title.value = '';
        author.value = '';
        document.querySelector('form button').textContent = 'Submit';
        document.querySelector('form h3').textContent = 'FORM';
        loadBooks();
    }
}

function create(type, text) {
    let el = document.createElement(type);
    el.textContent = text;
    return el;
}

attachHandlers();
