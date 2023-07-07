document.querySelector('.public').addEventListener('click', createPost);
document.querySelector('.cancel').addEventListener('click', cancel);
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
});

async function createPost() {}

function cancel() {}

async function loadPosts() {
    try {
        let res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');

        if (!res.ok) {
            let error = await res.json();
            throw error;
        }

        let data = await res.json();
    } catch (err) {
        alert(err.message);
    }
}
