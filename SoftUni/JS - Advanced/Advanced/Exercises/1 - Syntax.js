function one(type, weight, price) {
    console.log(`I need $${(price*(weight/1000)).toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${type}.`);
};


function two(one, two) {
    let small = Math.min(one, two);
    let divisor;

    for (let i = 1;i<=small;i++) {
        if (one%i==1 && two%i==1) {
            divisor=i;
        };
    };

    console.log(divisor);

};

function three(number) {
    let arr = number.toString().split("");
    
    let val = arr[0];
    let bool = true;
    for (const num of arr) {
        if (num!=val) {
            bool = false;
        }
    };

    console.log(bool);

};

function four(input) {
    let [year, month, day] = input;

    console.log(`${year}-${month}-${day}`);
};

function five(input) {
    let [steps, stepLen, speed] = input;

    let length = (steps*stepLen)/1000;
    let time = length/speed;
    let brek;

    

    
};

five([4000, 0.60, 5])

