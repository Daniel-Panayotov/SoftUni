function app() {
    document.getElementById('btn').addEventListener('click', clicked);

    function clicked() {
        console.log(this);
    }
}
