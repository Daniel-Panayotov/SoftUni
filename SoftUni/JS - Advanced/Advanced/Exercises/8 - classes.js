{
    class Rectange {
        constructor(height, width, color) {
            this.height = height;
            this.width = width;
            this.color = color;
        }

        calcArea() {
            return this.height * this.width;
        }
    }
}

{
    class Request {
        constructor(method, uri, version, message) {
            this.method = method;
            this.uri = uri;
            this.version = version;
            this.message = message;
            this.response = undefined;
            this.fulfilled = false;
        }
    }
}

let three = (array, sortParam) => {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];

    array.forEach(val => {
        let [destination, price, status] = val.split('|');
        let ticket = new Ticket(destination, price, status);

        tickets.push(ticket);
    });

    let final = tickets.sort((a, b) => {
        if (sortParam != 'price') {
            return a[sortParam].localeCompare(b[sortParam]);
        }
        return +a[sortParam] - +b[sortParam];
    });

    return final;
};

{
    class List {
        constructor() {
            this.list = [];
        }

        add(element) {
            if (typeof element == 'number') {
                this.list.push(element);
            }
        }

        remove(index) {
            if (typeof index == 'number' && index < this.list.length && index >= 0) {
                this.list.sort((a, b) => a - b);
                this.list.splice(index, 1);
            }
        }

        get(index) {
            if (typeof index == 'number' && index < this.list.length && index >= 0) {
                this.list.sort((a, b) => a - b);
                return this.list[index];
            }
        }

        get size() {
            return this.list.length;
        }
    }
}

{
    class Stringer {
        constructor(string, len) {
            this.innerString = string;
            this.innerLength = len;
        }

        increase(length) {
            this.innerLength += length;
        }

        decrease(length) {
            if (length >= this.innerLength) {
                this.innerLength = 0;
            } else {
                this.innerLength -= length;
            }
        }

        toString() {
            let string = this.innerString;

            if (string.length > this.innerLength) {
                return string.replace(string.slice(this.innerLength), '') + '...';
            }
            return string;
        }
    }
}

{
    class Company {
        constructor() {
            this.departments = {};
        }

        addEmployee(name, salary, position, department) {
            let employee = [name, salary, position, department];
            if (
                !employee.includes('') ||
                !employee.includes(undefined) ||
                !employee.includes(null) ||
                !salary < 0
            ) {
                if (!this.departments.hasOwnProperty(department)) {
                    this.departments[department] = {};
                }
                this.departments[department][name] = {
                    salary,
                    position,
                };

                return `New employee is hired. Name: ${name}. Position: ${position}`;
            }
            throw new Error('Invalid input!');
        }

        bestDepartment() {
            let bestSalary = 0;
            let depa = '';
            let counter = 0;
            let bestDep;

            for (let dep of Object.entries(this.departments)) {
                counter++;
                let avgSalary = 0;
                Object.entries(dep[1]).forEach(empl => {
                    avgSalary += empl[1].salary / Object.keys(dep[1]).length;
                });
                if (bestSalary < avgSalary) {
                    depa = Object.keys(this.departments)[counter - 1];
                    bestSalary = avgSalary;
                    bestDep = dep;
                }
            }
            let result =
                `Best Department is: ${depa}` + '\n' + `Average salary: ${bestSalary.toFixed(2)}`;

            let bestEmployees = [];

            for (let employee of Object.entries(bestDep[1])) {
                bestEmployees.push([employee[0], employee[1].salary, employee[1].position]);
            }

            bestEmployees.sort((a, b) => {
                if (a[1] == b[1]) {
                    return a[0].localeCompare(b[0]);
                }
                return b[1] - a[1];
            });

            bestEmployees.forEach(val => {
                result += '\n' + `${val[0]} ${val[1]} ${val[2]}`;
            });

            return result;
        }
    }
}

{
    class Hex {
        constructor(value) {
            this.value = value;
        }

        valueOf() {
            return this.value;
        }

        toString() {
            return '0x' + this.value.toString(16);
        }

        plus(hex) {
            if (hex instanceof Hex) {
                return new Hex(parseInt(hex.value, 16) + this.value);
            }

            return new Hex(this.value + hex);
        }

        minus(hex) {
            if (hex instanceof Hex) {
                return new Hex(this.value - parseInt(hex.value, 16));
            }

            return new Hex(this.value - hex);
        }

        parse(hex) {
            return parseInt(hex, 16);
        }
    }
}

let eight = input => {
    let juices = new Map();
    juices.set('juiceBottles', {});

    input.forEach(val => {
        let [juice, quant] = val.split(' => ');

        if (!juices.has(juice)) {
            juices.set(juice, 0);
        }
        juices.set(juice, juices.get(juice) + Number(quant));
        let amount = juices.get(juice);

        if (amount >= 1000) {
            let bottles = (amount - (amount % 1000)) / 1000;

            if (!juices.get('juiceBottles')[juice]) {
                juices.get('juiceBottles')[juice] = 0;
            }
            juices.get('juiceBottles')[juice] += bottles;

            juices.set(juice, juices.get(juice) - bottles * 1000);
        }
    });

    Object.entries(juices.get('juiceBottles')).forEach(val => {
        console.log(`${val[0]} => ${val[1]}`);
    });
};

let nine = input => {
    let carCollection = new Map();

    input.forEach(val => {
        let [carBrand, carModel, quant] = val.split(' | ');

        if (!carCollection.has(carBrand)) {
            carCollection.set(carBrand, {});
        }
        if (!carCollection.get(carBrand).hasOwnProperty(carModel)) {
            carCollection.get(carBrand)[carModel] = 0;
        }
        carCollection.get(carBrand)[carModel] += Number(quant);
    });

    for (let val of carCollection.entries()) {
        let cars = [`${val[0]}`];

        for (let car in val[1]) {
            cars.push(`###${car} -> ${val[1][car]}`);
        }

        console.log(cars.join('\n'));
    }
};
