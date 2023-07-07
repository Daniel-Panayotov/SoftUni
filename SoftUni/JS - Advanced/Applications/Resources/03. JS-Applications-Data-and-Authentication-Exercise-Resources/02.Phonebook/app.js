function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadEntries);
    document.getElementById('btnCreate').addEventListener('click', createEntry);
    document.getElementById('phonebook').addEventListener('click', deleteEntry);
}

async function loadEntries() {
    let entries = document.getElementById('phonebook');
    entries.replaceChildren();
    let res = await fetch('http://localhost:3030/jsonstore/phonebook');
    let data = await res.json();

    Object.entries(data).forEach(([key, val]) => {
        let li = document.createElement('li');
        li.textContent = `${val.person}: ${val.phone}`;
        li.dataset.id = val._id;
        let btn = document.createElement('button');
        btn.textContent = 'Delete';
        btn.id = 'delete';
        li.appendChild(btn);
        entries.appendChild(li);
    });
}

async function createEntry() {
    let person = document.getElementById('person');
    let phone = document.getElementById('phone');

    let options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ person: person.value, phone: phone.value }),
    };

    await fetch(`http://localhost:3030/jsonstore/phonebook`, options);

    person.value = '';
    phone.value = '';
    loadEntries();
}

async function deleteEntry(e) {
    if (e.target.id == 'delete') {
        let options = {
            method: 'delete',
        };

        let res = await fetch(
            `http://localhost:3030/jsonstore/phonebook/${e.target.parentElement.dataset.id}`,
            options
        );
        loadEntries();
    }
}

attachEvents();
