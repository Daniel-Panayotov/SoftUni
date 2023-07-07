async function solution() {
    let main = document.getElementById('main');
    main.addEventListener('click', clicker);
    let res = await fetch(`http://localhost:3030/jsonstore/advanced/articles/list`);
    let data = await res.json();

    data.forEach(({ _id, title }) => {
        main.appendChild(createAccordion(_id, title));
    });

    async function clicker(e) {
        if (e.target.className == 'button') {
            if (e.target.parentElement.parentElement.getAttribute('hasbeenopened') == 'false') {
                let res = await fetch(
                    `http://localhost:3030/jsonstore/advanced/articles/details/${e.target.id}`
                );
                let data = await res.json();

                e.target.parentElement.parentElement.querySelector('p').textContent = data.content;

                e.target.parentElement.parentElement.setAttribute('hasbeenopened', 'true');
            }
            e.target.textContent = e.target.textContent == 'More' ? 'Less' : 'More';

            let hidden = e.target.parentElement.parentElement.querySelector('.extra');
            hidden.style.display = e.target.textContent == 'Less' ? 'block' : 'none';
        }
    }

    function createAccordion(id, title) {
        let div = create('div', 'accordion');

        div.setAttribute('hasbeenopened', 'false');

        let head = create('div', 'head');
        head.appendChild(create('span', undefined, title));
        head.appendChild(create('button', 'button', 'More', id));

        let extra = create('div', 'extra');
        extra.appendChild(create('p'));

        div.appendChild(head);
        div.appendChild(extra);
        return div;
    }

    function create(type, clas, text, id) {
        let el = document.createElement(type);
        if (clas) {
            el.className = clas;
        }
        if (text) {
            el.textContent = text;
        }
        if (id) {
            el.id = id;
        }
        return el;
    }
}

solution();
