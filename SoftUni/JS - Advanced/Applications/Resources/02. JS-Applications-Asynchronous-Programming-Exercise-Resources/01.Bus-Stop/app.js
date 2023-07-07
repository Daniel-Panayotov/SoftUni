async function getInfo() {
    let id = document.getElementById('stopId');
    let name = document.getElementById('stopName');
    let buses = document.getElementById('buses');

    buses.replaceChildren();

    try {
        let res = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${id.value}`);

        if (!res.ok) {
            throw new Error();
        }

        let data = await res.json();

        if (!data.buses || !data.name) {
            throw new Error();
        }

        name.textContent = data.name;

        for (let bus in data.buses) {
            let li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
            buses.appendChild(li);
        }
    } catch (error) {
        name.textContent = 'Error';
        console.log(error);
    }
}
