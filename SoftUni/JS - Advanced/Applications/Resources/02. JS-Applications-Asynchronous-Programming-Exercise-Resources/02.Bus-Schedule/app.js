function solve() {
    let departbtn = document.getElementById('depart');
    let arrivebtn = document.getElementById('arrive');
    let info = document.querySelector(`#info span`);
    let stop = 'depot';
    let dataHolder;

    async function depart() {
        try {
            let res = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${stop}`);
            if (!res.ok) {
                throw new Error();
            }
            let data = await res.json();

            if (!data.next || !data.name || data.next == 'depot') {
                throw new Error();
            }

            stop = data.next;

            info.textContent = `Next stop ${data.name}`;

            departbtn.disabled = true;
            arrivebtn.disabled = false;
            dataHolder = data;
        } catch (error) {
            info.textContent = 'Error';

            departbtn.disabled = true;
            arrivebtn.disabled = true;

            console.log(error);
        }
    }

    function arrive() {
        departbtn.disabled = false;
        arrivebtn.disabled = true;

        info.textContent = `Arriving at ${dataHolder.name}`;
    }

    return {
        depart,
        arrive,
    };
}

let result = solve();
