let one = (name, population, treasury) => {
    let city = {
        name: name,
        population: population,
        treasury: treasury,
    };

    return city;
};

let two = cities => {
    let towns = {};

    cities.forEach(city => {
        let [cityName, cityPop] = city.split(' <-> ');

        if (towns[cityName]) {
            towns[cityName] += Number(cityPop);
        } else {
            towns[cityName] = Number(cityPop);
        }
    });

    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
};

let three = (name, population, treasury) => {
    let city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * (percentage / 100));
        },
        applyRecession(percentage) {
            this.treasury -= this.treasury * (percentage / 100);
        },
    };
    return city;
};

console.log(Number(''));
