let one = (num) => {
    let number = 0;
    for (let i=0;i<String(num).length;i++) {
        number = number + parseFloat(String(num)[i]);
    };
    console.log(number);
};

let two = (a, b, c) => {
    console.log(Array(a, b, c).join(""))
};

let three = (town, popil, area) => {
    console.log(`Town ${town} has population of ${popil} and area ${area} square km.`)
};

let four = (meters) => {
    console.log((meters/1000).toFixed(2)) 
};

let five = (pounds) => {
    console.log((pounds*1.31).toFixed(3))
};

let six = (a, b, c) => {
    console.log(Array(a, b, c).reverse().join(" "))
};

let seven = (letter) => {
    if (letter == letter.toUpperCase()) {
        console.log("Uppercase");
    }
    else console.log("lowercase")
};

let eight = (num, operator, num2) => {
    console.log(eval(String(num) + operator + String(num2)))
};

let nine = (fights, helm, sword, shield, armor) => {
    let cost = 0
    for (let i=1;i<=fights;i++) {
        if (i % 12==0) {
            cost = cost + armor
        }
        if (i % 6==0) {
            cost = cost + shield
        }
        if (i % 3==0) {
            cost = cost + sword
        }
        if (i % 2==0) {
            cost = cost + helm
        };
    };
    console.log(`Gladiator expenses: ${cost.toFixed(2)} aureus`)
};

let ten = (yield) => {
    let spices = 0;
    let days = 0;
    while (yield >= 100) {
        days++
        spices = spices + yield
        if (spices >= 26) {
            spices = spices - 26
        }
        else {spices = 0}
        yield = yield - 10
        if (yield < 100) {
            if (spices >= 26) {
                spices = spices - 26
            }
            else {spices = 0}
        };
    };
    console.log(`worked for ${days} days`)
    console.log(`mined ${spices} spices`)
};
