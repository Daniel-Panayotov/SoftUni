let one = array => {
    let foods = {};

    array.forEach((val, i) => {
        if (i % 2 == 0) {
            foods[val] = Number(array[i + 1]);
        }
    });

    console.log(foods);
};

let two = worker => {
    if (worker.dizziness) {
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
    }
    return worker;
};

let three = order => {
    let { model, power, color, carriage, wheelsize } = order;
    let car = {
        model,
        engine: {},
        carriage: { type: carriage, color },
        wheels: [0, 0, 0, 0],
    };

    car.wheels.fill(2 * Math.ceil(wheelsize / 2) - 1);
    if (90 >= power) {
        car.engine.power = 90;
        car.engine.volume = 1800;
    } else if (120 >= power) {
        car.engine.power = 120;
        car.engine.volume = 2400;
    } else {
        car.engine.power = 200;
        car.engine.volume = 3500;
    }

    return car;
};

let four = input => {
    let heroes = [];

    input.forEach(val => {
        let [name, level, newitems] = val.split(' / ');
        let items = newitems ? newitems.split(', ') : [];

        let hero = {
            name,
            level: Number(level),
            items,
        };
        heroes.push(hero);
    });
    console.log(JSON.stringify(heroes));
};

let five = input => {
    let products = {};

    input.forEach(town => {
        let [townName, product, newprice] = town.split(' | ');
        let price = Number(newprice);

        if (products[product]) {
            if (products[product].price > price) {
                products[product].price = price;
                products[product].townName = townName;
            }
        } else {
            products[product] = { price, townName };
        }
    });

    for (let key in products) {
        console.log(
            `${key} -> ${products[key].price} (${products[key].townName})`
        );
    }
};

let six = input => {
    let arrcatalog = [];
    let catalog = {};

    input.forEach(item => {
        let [name, price] = item.split(' : ');

        arrcatalog.push([name, Number(price)]);
    });

    let sorted = arrcatalog.sort((a, b) => a[0].localeCompare(b[0]));

    sorted.forEach(item => {
        let [name, price] = item;

        if (!catalog[name[0]]) {
            catalog[name[0]] = {};
        }
        catalog[name[0]][name] = price;
    });

    for (let key in catalog) {
        console.log(key);
        for (let item in catalog[key]) {
            console.log(` ${item}: ${catalog[key][item]}`);
        }
    }
};

let seven = input => {
    let towns = [];
    let regex =
        /\| (?<Town>\w+ ?(?:\w+)?) \| (?<lat>[0-9]+\.[0-9]+) \| (?<long>[0-9]+\.[0-9]+) \|/;

    input.forEach((str, i) => {
        if (i != 0) {
            let matches = regex.exec(str);

            let myTown = {
                Town: matches.groups.Town,
                Latitude: Number(Number(matches.groups.lat).toFixed(2)),
                Longitude: Number(Number(matches.groups.long).toFixed(2)),
            };

            towns.push(myTown);
        }
    });
    console.log(JSON.stringify(towns));
};

let eight = (width, height, color) => {
    let rectangle = {
        width,
        height,
        color: color[0].toUpperCase() + color.slice(1),
        calcArea() {
            return rectangle.height * rectangle.width;
        },
    };

    return rectangle;
};
