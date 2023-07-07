async function lockedProfile() {
    let main = document.getElementById('main');
    main.addEventListener('click', clicked);
    let res = await fetch(`http://localhost:3030/jsonstore/advanced/profiles`);
    let data = await res.json();

    main.replaceChildren();

    let i = 1;
    Object.entries(data).forEach(([id, val]) => {
        let profile = createProfile(val, i);
        main.appendChild(profile);
        i++;
    });

    function clicked(e) {
        if (e.target.textContent == 'Show more' || e.target.textContent == 'Hide it') {
            let [lock, unlock] = e.target.parentElement.querySelectorAll('input');

            if (unlock.checked) {
                e.target.parentElement.querySelector('div').style.display =
                    e.target.parentElement.querySelector('div').style.display == 'none'
                        ? 'block'
                        : 'none';

                e.target.textContent =
                    e.target.textContent == 'Show more' ? 'Hide it' : 'Show more';
            }
        }
    }

    function createProfile(data, i) {
        let div = create('div', 'profile');

        let img = create('img', 'userIcon');
        img.src = './iconProfile2.png';

        let lockLabel = create('label', undefined, 'Lock');
        let locked = document.createElement('input');
        locked.type = 'radio';
        locked.name = `user${i}Locked`;
        locked.value = 'lock';
        locked.checked = true;

        let unlockLabel = create('label', undefined, 'Unlock');
        let unlocked = document.createElement('input');
        unlocked.type = 'radio';
        unlocked.name = `user${i}Locked`;
        unlocked.value = 'unlock';
        unlocked.checked = false;
        let br = create('br');

        let hr = create('hr');
        let nameLabel = create('label', undefined, 'Username');

        let nameInput = create('input');
        nameInput.type = 'text';
        nameInput.name = `user${i}Username`;
        nameInput.value = data.username;
        nameInput.disabled = true;
        nameInput.readOnly = true;

        let infoDiv = create('div');
        infoDiv.className = `user${i}Username`;

        let infoHr = create('hr');

        let emailLabel = create('label', undefined, 'Email:');
        let emailInput = create('input');
        emailInput.type = 'email';
        emailInput.name = `user${i}Email`;
        emailInput.value = data.email;
        emailInput.disabled = true;
        emailInput.readOnly = true;

        let ageLabel = create('label', undefined, 'Age:');
        let ageInput = create('input');
        ageInput.type = 'email';
        ageInput.name = `user${i}Age`;
        ageInput.value = data.age;
        ageInput.disabled = true;
        ageInput.readOnly = true;

        let btn = create('button', undefined, 'Show more');

        infoDiv.appendChild(infoHr);
        infoDiv.appendChild(emailLabel);
        infoDiv.appendChild(emailInput);
        infoDiv.appendChild(ageLabel);
        infoDiv.appendChild(ageInput);

        infoDiv.style.display = 'none';

        div.appendChild(img);
        div.appendChild(lockLabel);
        div.appendChild(locked);
        div.appendChild(unlockLabel);
        div.appendChild(unlocked);
        div.appendChild(br);
        div.appendChild(hr);
        div.appendChild(nameLabel);
        div.appendChild(nameInput);
        div.appendChild(infoDiv);
        div.appendChild(btn);
        return div;
    }

    function create(type, clas, text) {
        let el = document.createElement(type);
        if (clas) {
            el.className = clas;
        }
        if (text) {
            el.textContent = text;
        }
        return el;
    }
}
