function solve(area, volume, input) {
    let obj = [];
    let x = JSON.parse(input);

    x.forEach(val => {
        for (let item in val) {
            val[item] = Number(val[item]);
        }

        let farea = area.bind(val)();
        let fvol = volume.bind(val)();

        obj.push({
            area: farea,
            volume: fvol,
        });
    });

    return obj;
}

function area() {
    return Math.abs(this.x * this.y);
}
function vol() {
    return Math.abs(this.x * this.y * this.z);
}

let obj = {
    name: 'hi',
    x() {
        console.log(this);
        function a() {
            console.log(this);
        }
        a();
    },
};

function Proccessor() {
    let str = '';

    return {
        append(x) {
            str += x;
        },
        removeStart(n) {
            str = str.slice(n);
        },
        removeEnd(n) {
            str = str.slice(0, str.length - n);
        },
        print() {
            console.log(str);
        },
    };
}

let ya = Proccessor();

ya.append('hi');
ya.print();
