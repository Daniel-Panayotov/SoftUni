window.addEventListener('load', solve);

function solve() {
    let [firstName, lastName, people, date, days] =
        document.querySelectorAll('.container-text input');

    let ul = document.querySelector('.ticket-info-list');

    let nextBTN = document.getElementById('next-btn');
    nextBTN.addEventListener('click', nextStep);

    document.getElementById('info-ticket').addEventListener('click', clicked);

    document.getElementById('confirm-ticket-section').addEventListener('click', final);

    function nextStep(e) {
        e.preventDefault();
        if (
            firstName.value != '' &&
            lastName.value != '' &&
            people.value != '' &&
            date.value != '' &&
            days.value != ''
        ) {
            nextBTN.disabled = true;
            let li = document.createElement('li');
            li.className = 'ticket';

            let article = document.createElement('article');
            article.appendChild(create('h3', `Name: ${firstName.value} ${lastName.value}`));
            article.appendChild(create('p', `From date: ${date.value}`));
            article.appendChild(create('p', `For ${days.value} days`));
            article.appendChild(create('p', `For ${people.value} people`));
            li.appendChild(article);

            li.appendChild(create('button', 'Edit', 'edit-btn'));
            li.appendChild(create('button', 'Continue', 'continue-btn'));

            ul.appendChild(li);

            firstName.value = '';
            lastName.value = '';
            people.value = '';
            date.value = '';
            days.value = '';
        }
    }

    function clicked(e) {
        if (e.target.className == 'edit-btn') {
            let article = e.target.parentElement.firstChild;
            let [x, first, second] = article.querySelector('h3').textContent.split(' ');
            let [dAte, dAys, pe0ple] = article.querySelectorAll('p');

            firstName.value = first;
            lastName.value = second;
            people.value = pe0ple.textContent.split(' ')[1];
            date.value = dAte.textContent.split(' ')[2];
            days.value = dAys.textContent.split(' ')[1];
            nextBTN.disabled = false;
            article.parentElement.remove();
        } else if (e.target.className == 'continue-btn') {
            let confirm = document.querySelector('.confirm-ticket');
            let li = e.target.parentElement;
            li.remove();

            let btn = li.querySelectorAll('button')[0];
            btn.remove();
            let oBtn = li.querySelectorAll('button')[0];
            oBtn.remove();

            li.appendChild(create('button', 'Confirm', 'confirm-btn'));
            li.appendChild(create('button', 'Cancel', 'cancel-btn'));

            confirm.appendChild(li);
        }
    }

    function final(e) {
        if (e.target.className == 'confirm-btn') {
            let div = document.getElementById('main');
            div.remove();
            let thank = create('h1', 'Thank you, have a nice day! ');
            thank.id = 'thank-you';
            let btn = create('button', 'Back');
            btn.id = 'back-btn';
            body.appendChild(thank);
            body.appendChild(btn);
        } else if (e.target.className == 'cancel-btn') {
            e.target.parentElement.remove();
            nextBTN.disabled = false;
        }
    }

    function create(element, text, cIass) {
        let el = document.createElement(element);
        el.textContent = text;
        if (cIass) {
            el.className = cIass;
        }
        return el;
    }
}
