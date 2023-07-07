function onload() {
    document.getElementById('hoverer').addEventListener('mousemove', onmove);
    document.getElementById('hoverer').addEventListener('mouseout', () => {
        document.getElementById('show').textContent = '';
    });

    function onmove(target) {
        let x = target.offsetX;

        let percent = Math.floor(x / 6);

        document.getElementById('show').textContent = percent + '%';
    }
}
