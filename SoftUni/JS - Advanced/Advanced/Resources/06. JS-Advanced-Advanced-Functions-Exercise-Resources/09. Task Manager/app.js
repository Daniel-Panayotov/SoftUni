function solve() {
    document.getElementById('add').addEventListener('click', add);

    let [inputSection, openSection, ProgressSection, completedSection] =
        document.querySelectorAll('section');

    openSection.addEventListener('click', open);
    ProgressSection.addEventListener('click', progress);

    let references = [];

    function add(e) {
        e.preventDefault();
        let task = document.getElementById('task');
        let desc = document.getElementById('description');
        let date = document.getElementById('date');

        if (task.value != '' && desc.value != '' && date.value != '') {
            let article = document.createElement('article');

            article.appendChild(createEl('h3', task.value));
            article.appendChild(createEl('p', 'Description: ' + desc.value));
            article.appendChild(createEl('p', 'Due Date: ' + date.value));

            let div = document.createElement('div');
            div.className = 'flex';

            let start = createEl('button', 'Start');
            start.className = 'green';
            let deleter = createEl('button', 'Delete');
            deleter.className = 'red';

            div.appendChild(start);
            div.appendChild(deleter);

            article.appendChild(div);

            openSection.querySelectorAll('div')[1].appendChild(article);
            task.value = '';
            date.value = '';
            desc.value = '';

            references.push({
                article,
                start,
                deleter,
            });
        }
    }

    function open(e) {
        references.forEach(val => {
            if (e.target == val.start) {
                val.start.remove();

                let finish = createEl('button', 'Finish');
                finish.className = 'orange';
                finish.setAttribute('id', 'finish');

                val.article.querySelector('div').appendChild(finish);
                ProgressSection.querySelectorAll('div')[1].appendChild(val.article);
            } else if (e.target == val.deleter) {
                e.target.parentElement.parentElement.remove();
            }
        });
    }

    function progress(e) {
        let finisher = document.getElementById('finish');

        references.forEach(val => {
            if (e.target == val.deleter) {
                val.article.remove();
            } else if (e.target == finisher) {
                val.article.querySelector('div').remove();
                completedSection.querySelectorAll('div')[1].appendChild(val.article);
            }
        });
    }

    function createEl(type, content) {
        let element = document.createElement(type);
        element.textContent = content;

        return element;
    }
}
