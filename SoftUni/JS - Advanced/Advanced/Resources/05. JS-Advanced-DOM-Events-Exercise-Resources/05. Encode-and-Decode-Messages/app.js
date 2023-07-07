function encodeAndDecodeMessages() {
    let btns = Array.from(document.querySelectorAll('button'));

    btns[0].addEventListener('click', encode);
    btns[1].addEventListener('click', translate);

    function encode() {
        let receiver = btns[1].parentElement.querySelector('textarea');

        let text = btns[0].parentElement.querySelector('textarea');
        let encoded = text.value
            .split('')
            .map(val => String.fromCharCode(val.charCodeAt(0) + 1))
            .join('');

        text.value = '';
        receiver.value = encoded;
    }
    function translate() {
        let receiver = btns[1].parentElement.querySelector('textarea');
        let decoded = receiver.value
            .split('')
            .map(val => String.fromCharCode(val.charCodeAt(0) - 1))
            .join('');

        receiver.value = decoded;
    }
}
