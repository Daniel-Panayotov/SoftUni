function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
    document.getElementById('btnViewPost').addEventListener('click', viewPost);
    let options = document.getElementById('posts');
    let title = document.getElementById('post-title');
    let body = document.getElementById('post-body');
    let commentsHolder = document.getElementById('post-comments');

    async function viewPost() {
        if (options.value) {
            let oRes = await fetch(`http://localhost:3030/jsonstore/blog/posts/${options.value}`);
            let oData = await oRes.json();
            title.textContent = oData.title;
            body.textContent = oData.body;

            commentsHolder.replaceChildren();
            let res = await fetch(`http://localhost:3030/jsonstore/blog/comments`);
            let data = await res.json();

            let comments = Object.entries(data).filter(val => val[1].postId == options.value);

            comments.forEach(comment => {
                commentsHolder.appendChild(create('li', comment[1].text, undefined, comment[1].id));
            });
        }
    }

    async function loadPosts() {
        let res = await fetch('http://localhost:3030/jsonstore/blog/posts');
        let data = await res.json();

        options.replaceChildren();

        Object.entries(data).forEach(([key, val]) => {
            options.appendChild(create('option', val.title, key));
        });
    }

    function create(type, text, value, id) {
        let el = document.createElement(type);
        if (value) {
            el.value = value;
        }
        if (id) {
            el.id = id;
        }
        el.textContent = text;
        return el;
    }
}

attachEvents();
