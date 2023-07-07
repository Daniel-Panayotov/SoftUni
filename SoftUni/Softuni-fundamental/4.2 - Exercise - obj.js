let one = (input) => {

    for (const name of input) {
        console.log(`Name: ${name} -- Personal Number: ${name.length}`);
    }

}

let two = (input) => {
    class Town{
        constructor(town, latitude, longtitude) {
            this.town = town;
            this.latitude = latitude.toFixed(2);
            this.longtitude = longtitude.toFixed(2);
        }
    }

    for (const item of input) {
        let [town, ...others] = item.split(" | ");
        let [latitude, longtitude] = others.map(x => Number(x));

        let NewTown = new Town(town, latitude, longtitude);
        console.log(NewTown);
    }
}

let three = (input, input2) => {
    let Owned = input;
    let Ordered = input2;
    let store = {};

    for (let i=0;i<Owned.length;i+=2) {
        let ItemName = Owned[i];
        let ItemQuant = Number(Owned[i+1]);

        store[ItemName] = {
            quantity: ItemQuant
        }
    };

    for (let i=0;i<Ordered.length;i+=2) {
        let ItemName = Ordered[i];
        let ItemQuant = Number(Ordered[i+1])

        if (store[ItemName]) {
            store[ItemName].quantity += ItemQuant;
        }
        else {
            store[ItemName] = {
                quantity: ItemQuant
            }
        }
    }
    
    for (const key of Object.keys(store)) {
        console.log(`${key} -> ${store[key].quantity}`);
    }
}

let four = (input) => {
    let array = [];
    let movies = {};


    input.forEach(line => {
        if (line.includes("addMovie")) {
            let movie = line.split("addMovie ")[1];

            array.push(movie);
            movies[movie] = {
                name: movie
            };
        }
        else if (line.includes("directedBy")) {
            let directed = line.split(" directedBy ");

            if (array.includes(directed[0])) {
                movies[directed[0]].director = directed[1];
            };
        }
        else if (line.includes("onDate")) {
            let date = line.split(" onDate ");
            
            if (array.includes(date[0])) {
                movies[date[0]].date = date[1];
            }
        }
    });
    for (const key in movies) {
        if (movies[key].date && movies[key].director) {
            console.log(JSON.stringify(movies[key]));
        }
    };
};

let five = (input) => {
    let Heroes = {};

    input.forEach(Hero => {
       let [name, level, items] = Hero.split(" / ");
       
       Heroes[name] = {
        level: Number(level),
        items: items
       };
    });
};

five([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])