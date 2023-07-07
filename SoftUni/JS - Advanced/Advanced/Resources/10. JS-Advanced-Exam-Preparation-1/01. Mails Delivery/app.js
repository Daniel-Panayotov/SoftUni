function solve() {
    document.getElementById('add').addEventListener('click', added);
    document.getElementById('reset').addEventListener('click', reset);
    document.getElementById('list').addEventListener('click', click);

    let [name, title] = document.querySelectorAll('form input');
    let message = document.getElementById('message');

    function reset(e) {
        e.preventDefault();
        name.value = '';
        title.value = '';
        message.value = '';
    }

    function added(e) {
        e.preventDefault();

        if (name.value != '' && title.value != '' && message.value != '') {
            let li = document.createElement('li');

            li.appendChild(create('h4', `Title: ${title.value}`));
            li.appendChild(create('h4', `Recipient Name: ${name.value}`));
            li.appendChild(create('span', message.value));

            let div = document.createElement('div');
            div.id = 'list-action';

            let send = create('button', 'Send', 'submit');
            send.id = 'send';

            let del = create('button', 'Delete', 'submit');
            del.id = 'delete';

            div.appendChild(send);
            div.appendChild(del);

            li.appendChild(div);

            document.getElementById('list').appendChild(li);

            name.value = '';
            title.value = '';
            message.value = '';
        }
    }

    function click(e) {
        let target = e.target;
        if (target.id == 'send') {
            target.parentElement.parentElement.remove();

            let li = document.createElement('li');
            li.appendChild(
                create(
                    'span',
                    target.parentElement.parentElement
                        .querySelectorAll('h4')[1]
                        .textContent.replace('Recipient Name', 'To')
                )
            );

            li.appendChild(
                create(
                    'span',
                    target.parentElement.parentElement.querySelectorAll('h4')[0].textContent
                )
            );

            let div = document.createElement('div');
            div.className = 'btn';
            let btn = create('button', 'Delete', 'submit');
            btn.className = 'delte';
            div.appendChild(btn);
            li.appendChild(div);

            document.querySelector('.sent-list').appendChild(li);

            btn.addEventListener('click', sentDel);
        } else if (target.id == 'delete') {
            target.parentElement.parentElement.remove();

            let li = document.createElement('li');

            li.appendChild(
                create(
                    'span',
                    target.parentElement.parentElement
                        .querySelectorAll('h4')[1]
                        .textContent.replace('Recipient Name', 'To')
                )
            );

            li.appendChild(
                create(
                    'span',
                    target.parentElement.parentElement.querySelectorAll('h4')[0].textContent
                )
            );

            console.log(li);

            document.querySelector('.delete-list').appendChild(li);
        }
    }

    function sentDel(e) {
        e.target.parentElement.parentElement.remove();
        let li = document.createElement('li');

        li.appendChild(
            create(
                'span',
                e.target.parentElement.parentElement.querySelectorAll('span')[0].textContent
            )
        );

        li.appendChild(
            create(
                'span',
                e.target.parentElement.parentElement.querySelectorAll('span')[1].textContent
            )
        );

        document.querySelector('.delete-list').appendChild(li);
    }

    function create(ele, content, type) {
        let element = document.createElement(ele);
        element.textContent = content;

        if (type) {
            element.setAttribute('type', type);
        }

        return element;
    }
}
solve();

//7:20 - 8:10
