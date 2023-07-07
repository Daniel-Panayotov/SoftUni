function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', changed);

    let regex = /^(?<name>[a-z]+)@[a-z]+\.[a-z]+$/;

    function changed() {
        let match = regex.exec(input.value);

        if (!match) {
            input.className = 'error';
        } else {
            input.classList.remove('error');
        }
    }
}
