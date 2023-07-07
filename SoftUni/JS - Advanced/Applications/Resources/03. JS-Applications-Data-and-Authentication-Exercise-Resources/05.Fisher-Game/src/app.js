function attachHandlers() {
    document.getElementById('logout').addEventListener('click', logout);
    document.querySelector('aside .load').addEventListener('click', loadCatches);
    document.querySelector('#catches').addEventListener('click', dispatcher);
    document.querySelector('#addForm').addEventListener('submit', e => {
        e.preventDefault();
    });
    document.getElementById('addForm').addEventListener('click', createCatch);
}

function access() {
    let updaters = document.getElementsByClassName('update');
    let deleters = document.getElementsByClassName('delete');
    let add = document.getElementsByClassName('add')[0];
    let logout = document.getElementById('user');
    let guest = document.getElementById('guest');
    let user = document.querySelector('nav p span');

    if (!localStorage.getItem('token')) {
        for (const btn of updaters) {
            btn.disabled = true;
        }
        for (const btn of deleters) {
            btn.disabled = true;
        }
        add.disabled = true;
        logout.style.display = 'none';
        guest.style.display = 'inline-block';
        user.textContent = 'guest';
    } else {
        for (const btn of updaters) {
            btn.disabled = btn.dataset.owner_id == localStorage.getItem('id') ? false : true;
        }
        for (const btn of deleters) {
            btn.disabled = btn.dataset.owner_id == localStorage.getItem('id') ? false : true;
        }
        add.disabled = false;
        logout.style.display = 'inline-block';
        guest.style.display = 'none';
        user.textContent = localStorage.getItem('user');
    }
}

async function logout() {
    let options = {
        method: 'get',
        headers: {
            'X-Authorization': localStorage.getItem('token'),
        },
    };

    try {
        let res = await fetch('http://localhost:3030/users/logout', options);
        if (res.status != 204) {
            let error = await res.json();
            throw error;
        }
        localStorage.clear();
        window.location.replace('./index.html');
    } catch (err) {
        alert(err.message);
    }
}

async function loadCatches() {
    try {
        let res = await fetch('http://localhost:3030/data/catches');
        if (!res.ok) {
            let error = await res.json();
            throw error;
        }
        let data = await res.json();
        document.getElementById('catches').replaceChildren();
        data.forEach(val => {
            let div = create('div', undefined, 'catch');
            div.appendChild(create('label', 'Angler'));
            div.appendChild(create('input', undefined, 'angler', 'text', val.angler));
            div.appendChild(create('label', 'Weight'));
            div.appendChild(create('input', undefined, 'weight', 'text', val.weight));
            div.appendChild(create('label', 'Species'));
            div.appendChild(create('input', undefined, 'species', 'text', val.species));
            div.appendChild(create('label', 'Location'));
            div.appendChild(create('input', undefined, 'location', 'text', val.location));
            div.appendChild(create('label', 'Bait'));
            div.appendChild(create('input', undefined, 'bait', 'text', val.bait));
            div.appendChild(create('label', 'Capture Time'));
            div.appendChild(create('input', undefined, 'captureTime', 'number', val.captureTime));
            let update = create('button', 'Update', 'update');
            update.dataset.owner_id = val._ownerId;
            update.dataset.id = val._id;
            let del = create('button', 'Delete', 'delete');
            del.dataset.owner_id = val._ownerId;
            del.dataset.id = val._id;
            div.appendChild(update);
            div.appendChild(del);
            document.getElementById('catches').appendChild(div);
        });
        access();
    } catch (err) {
        console.log(err);
    }
}

async function createCatch(e) {
    if (e.target.className == 'add') {
        try {
            let [angler, weight, species, location, bait, captureTime] =
                document.querySelectorAll('#addForm fieldset input');

            if (
                angler.value == '' ||
                weight.value == '' ||
                species.value == '' ||
                location.value == '' ||
                bait.value == '' ||
                captureTime.value == ''
            ) {
                throw new Error();
            }

            let cat = {
                angler: angler.value,
                weight: weight.value,
                species: species.value,
                location: location.value,
                bait: bait.value,
                captureTime: captureTime.value,
            };

            let options = {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': localStorage.getItem('token'),
                },
                body: JSON.stringify(cat),
            };

            let res = await fetch('http://localhost:3030/data/catches', options);
            if (!res.ok) {
                let error = await res.json();
                throw error;
            }
            angler.value = '';
            weight.value = '';
            species.value = '';
            location.value = '';
            bait.value = '';
            captureTime.value = '';
            loadCatches();
        } catch (err) {
            alert(err.message);
        }
    }
}

function dispatcher(e) {
    if (e.target.className == 'update') {
        updateCatch(e);
    } else if (e.target.className == 'delete') {
        deleteCatch(e);
    }
}

async function updateCatch(e) {
    try {
        let [angler, weight, species, location, bait, captureTime] =
            e.target.parentElement.querySelectorAll('input');

        if (
            angler.value == '' ||
            weight.value == '' ||
            species.value == '' ||
            location.value == '' ||
            bait.value == '' ||
            captureTime.value == ''
        ) {
            throw new Error();
        }

        let cat = {
            angler: angler.value,
            weight: weight.value,
            species: species.value,
            location: location.value,
            bait: bait.value,
            captureTime: captureTime.value,
        };
        let options = {
            method: 'put',
            headers: {
                'X-Authorization': localStorage.getItem('token'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cat),
        };

        let res = await fetch(`http://localhost:3030/data/catches/${e.target.dataset.id}`, options);
        if (!res.ok) {
            let error = await res.json();
            throw error;
        }
        loadCatches();
    } catch (err) {
        alert(err.message);
    }
}

async function deleteCatch(e) {
    let options = {
        method: 'delete',
        headers: {
            'X-Authorization': localStorage.getItem('token'),
        },
    };

    try {
        let res = await fetch(`http://localhost:3030/data/catches/${e.target.dataset.id}`, options);
        if (!res.ok) {
            let error = await res.json();
            throw error;
        }
        loadCatches();
    } catch (err) {
        alert(err.message);
    }
}

function create(ele, text, clas, type, value) {
    let el = document.createElement(ele);
    if (clas) {
        el.className = clas;
    }
    if (type) {
        el.type = type;
    }
    if (text) {
        el.textContent = text;
    }
    if (value) {
        el.value = value;
    }
    return el;
}

attachHandlers();
access();
