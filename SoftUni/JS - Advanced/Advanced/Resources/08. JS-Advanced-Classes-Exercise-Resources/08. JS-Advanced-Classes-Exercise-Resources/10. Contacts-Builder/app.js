class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
        this.ref = [];
    }

    set online(val) {
        this._online = val;
        if (val == true) {
            this.ref[0].classList.add('online');
        } else {
            this.ref[0].classList.remove('online');
        }
    }

    render(id) {
        let dom = document.getElementById(id);

        let article = document.createElement('article');

        let names = document.createElement('div');
        names.className = 'title';
        names.textContent = `${this.firstName} ${this.lastName}`;

        this.ref.push(names);

        let info = document.createElement('div');
        info.className = 'info';
        info.style.display = 'none';

        let btn = document.createElement('button');
        btn.textContent = '\u2139';

        btn.addEventListener('click', clicked);

        function clicked() {
            info.style.display = info.style.display == 'none' ? 'block' : 'none';
        }

        names.appendChild(btn);

        let phone = document.createElement('span');
        phone.textContent = `\u260E ${this.phone}`;

        let email = document.createElement('span');
        email.textContent = `\u2709` + ` ${this.email}`;

        info.appendChild(phone);
        info.appendChild(email);

        article.appendChild(names);
        article.append(info);

        dom.appendChild(article);
    }
}
