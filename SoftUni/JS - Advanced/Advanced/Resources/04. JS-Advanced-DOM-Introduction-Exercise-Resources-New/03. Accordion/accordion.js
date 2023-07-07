function toggle() {
    let btn = document.getElementsByClassName('button')[0].textContent;

    console.log(btn);

    if (btn == 'More') {
        document.getElementsByClassName('button')[0].textContent = 'Less';
        document.getElementById('extra').style.display = 'block';
    } else if (btn == 'Less') {
        document.getElementsByClassName('button')[0].textContent = 'More';
        document.getElementById('extra').style.display = 'none';
    }
}
