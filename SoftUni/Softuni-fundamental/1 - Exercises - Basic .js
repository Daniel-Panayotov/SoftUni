let one = (age) => {
    if (0 <= age && age <= 2) {
        console.log("is a baby");
    }
    else if (3 <= age && age <= 13) {
        console.log("is a child");
    }
    else if (14 <= age && age <= 19) {
        console.log("is a teenager");
    }
    else if (20 <= age && age <= 65) { 
        console.log("is an adult");
    }
    else if (66 <= age) {
        console.log("is an elder");
    }
    else {
        console.log("no");
    }
}

let two = (num, dec) => {
    if (dec > 15) {
        dec = 15;
    };
    answer = parseFloat(String(num)).toFixed(dec);
    console.log(answer);
};

let three = (num) => {
    if (num / 10) {
        console.log(`${num} is divisible by 10`)
    }
    else if (num / 7) {
        console.log(`${num} is divisible by 7`)
    }
    else if (num / 6) {
        console.log(`${num} is divisible by 6`)
    }
    else if (num / 3) {
        console.log(`${num} is divisible by 3`)
    }
    else if (num / 2) {
        console.log(`${num} is divisible by 2`)
    };
};

let four = (num, type, day) => {// cool idea to complicate smth
    let prices = [
        [8.45,9.80,10.46],
        [10.90,15.60,16.00],
        [15.00,20.00,22.50]
    ];
    let checkday = (day) => {
        if (day == "Friday") {
            return 0
        }
        else if (day == "Saturday") {
            return 1
        }
        else if (day == "Sunday") {
            return 2
        }
    }
    let price = 0;
    if (type == "Students") {
        price = prices[0][checkday(day)]*num;
        if (30 <= num) {
            price = price * 0.85;
        };
    }
    else if (type == "Business") {
        price = prices[1][checkday(day)]*num;
        if (100 <= num) {
            price = price - prices[1][checkday(day)]*10;;
        };
    }
    else if (type == "Regular") {
        price = prices[2][checkday(day)]*num;
        if (10 <= num && num <= 20) {
            price = price * 0.95;
        };
    };
    console.log(price.toFixed(2));
};

let five = (year) => {
    if (year / 4 && year /! 100) {
        console.log("yes");
    }
    else if (year / 400) {
        console.log("yes");
    }
    else {
        console.log("no");
    };
};

let six = (num1, num2) => {
    let x = 0;
    let y = "";
    while (num1 <= num2) {
        x += num1
        y = y + String(num1) + " ";
        num1++;
    };
    console.log(y);
    console.log(x);
};

let seven = (num) => {// pretty funny
    for (let i=0;i<num;i++) {
        let x = "";
        for (let y=0;y<=i;y++) {
            x = x + String(i+1) + " ";
        };
        console.log(x);
        x = "";
    };
};

let eight = (num) => {
    for (let i=0;i<10;i++) {
        console.log(`${num} X ${i+1} = ${num*(i+1)}`);
    };
};

let nine = (arr) => {//incomplete
    let count = 0;
    for (let i=0;i<=3;i++) {
        if (arr[i+1] === String(arr[0]).split().reverse().join("")) {//methods dont work
            console.log(`User ${arr[0]} logged in.`);
            break;
        };
        count++;
        if (count == 4) {
            console.log(`${arr[0]}, get blocked dumb fuck`);
            break;
        };
        console.log("Fuck off");
    };
};

let ten = (width, height) => {//autist
    let steps=0
    let stone=0
    let marble=0
    let lapis=0
    let gold=0
    for (let i=width;1 <= i;i = i - 2) {
        steps++;
        console.log(i)
        if (i == 1,2) {
            if (i=1) {
                gold++;
            }
            else gold = gold + 4;
            break;
        }
        else if (steps % 5 == 0) {
            lapis = lapis + ((i*4)-4)*height;
        }
        else {
            marble = marble + ((i*4)-4)*height
            console.log(i)
        };
        stone = stone + (i*i - ((i*4)-4))*height;

    };
    console.log(`${stone} stone `)
    console.log(`${marble} marble`)
    console.log(`${lapis} lapis`)
    console.log(`${gold} gold`)
    console.log(`${steps} steps`)
};

let eleven = (arr) => {
    let money = 0;
    let btc = 0;
    let day = 0;
    for (let i=0;i<arr.length;i++) {
        if ((i+1) % 3 == 0) {
            money = money + (arr[i]*67.51)*0.7;
        }
        else {
            money = money + arr[i]*67.51;
        }
        while (0 <= money - 11949.16) {
            btc++;
            money = money - 11949.16;
            if (btc == 1) {
                day = i+1;
            };
        };
    };
    console.log(`${money.toFixed(2)} money left`)
    console.log(`${btc} btc`)
    console.log(`1st btc was bought on - ${day}`)
};

eleven([3124.15, 504.212, 2511.124])


