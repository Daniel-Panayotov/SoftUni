function attachEvents() {
    document.getElementById('submit').addEventListener('click', getweather);
    let location = document.getElementById('location');
    let forecaster = document.getElementById('forecast');
    let curr = document.getElementById('current');
    let future = document.getElementById('upcoming');

    async function getweather() {
        try {
            let res = await fetch(`http://localhost:3030/jsonstore/forecaster/locations`);
            if (!res.ok) {
                throw new Error();
            }

            let data = await res.json();

            let code = data.find(val => val.name == location.value).code;
            if (!code) {
                throw new Error();
            }

            let res2 = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);
            if (!res2.ok) {
                throw new Error();
            }
            let data2 = await res2.json();
            if (!data2.name || !data2.forecast) {
                throw new Error();
            }

            let res3 = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);
            if (!res3.ok) {
                throw new Error();
            }
            let data3 = await res3.json();
            if (!data3.name || !data3.forecast) {
                throw new Error();
            }

            let forecasts = create('div', 'forecasts');

            forecasts.appendChild(
                create('span', 'condition symbol', undefined, data2.forecast.condition)
            );

            let today = create('span', 'condition');
            today.appendChild(create('span', 'forecast-data', data2.name));
            today.appendChild(
                create('span', 'forecast-data', `${data2.forecast.low}°/${data2.forecast.high}°`)
            );
            today.appendChild(create('span', 'forecast-data', data2.forecast.condition));
            forecasts.appendChild(today);

            curr.appendChild(forecasts);

            let day = create('div', 'forecast-info');
            day.appendChild(createday(data3.forecast[0]));
            day.appendChild(createday(data3.forecast[1]));
            day.appendChild(createday(data3.forecast[2]));
            future.appendChild(day);

            forecaster.style.display = `block`;
        } catch (error) {
            forecaster.style.display = `block`;
            forecaster.textContent = 'Error';
        }
    }

    function createday(data) {
        let forecast = create('span', 'upcoming');

        forecast.appendChild(create('span', 'symbol', undefined, data.condition));
        forecast.appendChild(create('span', 'forecast-data', `${data.low}°/${data.high}°`));
        forecast.appendChild(create('span', 'forecast-data', data.condition));

        return forecast;
    }

    function create(type, clas, text, condition) {
        let el = document.createElement(type);
        el.className = clas;
        if (text) {
            el.textContent = text;
        }
        if (condition) {
            let symbol;
            if (condition == 'Sunny') {
                symbol = '☀';
            }
            if (condition == 'Partly sunny') {
                symbol = '⛅';
            }
            if (condition == 'Overcast') {
                symbol = '☁';
            }
            if (condition == 'Rain') {
                symbol = '☂';
            }
            el.textContent = symbol;
        }
        return el;
    }
}

attachEvents();
