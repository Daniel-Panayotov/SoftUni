function lockedProfile() {
    document.getElementById('main').addEventListener('click', showMore);

    function showMore(e) {
        let parent = e.target.parentElement;
        let btn = parent.querySelector('button');

        if (e.target == btn) {
            let locked = parent.querySelector('input').checked;

            if (!locked) {
                let div = parent.querySelector('div');

                btn.textContent =
                    btn.textContent == 'Show more' ? 'Hide it' : 'Show more';
                console.log(div.style.display);

                if (!div.style.display || div.style.display == 'none') {
                    div.style.display = 'block';
                } else {
                    div.style.display = 'none';
                }
            }
        }
    }
}
