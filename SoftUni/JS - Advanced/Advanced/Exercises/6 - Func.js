let one = (list, order) => {
    return list.sort((a, b) => {
        if (order == 'asc') {
            return a - b;
        } else {
            return b - a;
        }
    });
};

function two() {
    let args = Array.from(arguments);

    let holder = {};

    args.forEach(val => {
        console.log(`${typeof val}: ${val}`);

        if (!holder[typeof val]) {
            holder[typeof val] = 0;
        }

        holder[typeof val]++;
    });

    Array.from(Object.entries(holder))
        .sort((a, b) => b[1] - a[1])
        .forEach(val => console.log(`${val[0]} = ${val[1]}`));
}

function three() {
    let nums = [0, 1];
    return function fib() {
        nums.push(nums[0] + nums[1]);

        nums.shift();
        return nums[0];
    };
}

function four() {
    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavours: 0,
    };

    function isPlenty(flavour, carb, fat, protein) {}

    let recipes = {
        apple(quant) {
            let carb = quant;
            let flavour = 2 * quant;
            if (storage.carbohydrate >= carb && storage.flavours >= flavour) {
                return 'Success';
            }
            return isPlenty(flavour, carb);
        },
        lemonade(quant) {
            let carb = 10 * quant;
            let flavour = 20 * quant;
            if (storage.carbohydrate >= carb && storage.flavours >= flavour) {
                return 'Success';
            }
            return isPlenty(flavour, carb);
        },
        burger(quant) {
            let carb = 5 * quant;
            let flavour = 3 * quant;
            let fat = 7 * quant;
            if (storage.carbohydrate >= carb && storage.flavours >= flavour && storage.fat >= fat) {
                return 'Success';
            }
            return isPlenty(flavour, carb, fat);
        },
        eggs(quant) {
            let protein = 10 * quant;
            let fat = quant;
            let flavour = quant;
            if (storage.fat >= fat && storage.flavours >= flavour && storage.protein >= protein) {
                return 'Success';
            }
            return isPlenty(flavour, undefined, fat, protein);
        },
        turkey(quant) {
            let carb = 10 * quant;
            let protein = 10 * quant;
            let flavour = 10 * quant;
            let fat = 10 * quant;
            if (
                storage.fat >= fat &&
                storage.flavours >= flavour &&
                storage.protein >= protein &&
                storage.carbohydrate >= carb
            ) {
                return 'Success';
            }
            return isPlenty(flavour, carb, fat, protein);
        },
    };

    let funcs = {
        restock(el, quant) {
            storage[el] += quant;
            return 'Success';
        },
        prepare(recipe, quant) {
            return recipes[recipe](quant);
        },
        report() {
            return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavours}`;
        },
    };

    return function worker(input) {
        let [order, elRec, quant] = input.split(' ');

        if (elRec) {
            return funcs[order](elRec, quant);
        } else {
            return funcs[order]();
        }
    };
}
