let one = (array, separator) => {
    console.log(array.join(separator));
};

let two = (array, step) => {
    let newArray = [];

    for (let i = 0; i < array.length; i += step) {
        newArray.push(array[i]);
    }

    // newArray.forEach(val => console.log(val));
    return newArray;
};

let three = input => {
    let number = 1;
    let array = [];

    for (const command of input) {
        if (command == 'add') {
            array.push(number);
        } else {
            array.pop();
        }
        number++;
    }

    if (array.length == 0) {
        console.log('Empty');
    } else {
        array.forEach(val => console.log(val));
    }
};

let four = (array, rotations) => {
    while (rotations > 0) {
        let val = array.pop();
        array.unshift(val);

        rotations--;
    }

    console.log(array.join(' '));
};

let five = array => {
    let num = 0;
    let newArray = array.filter(val => {
        if (val >= num) {
            num = val;
            return val;
        }
    });

    return newArray;
};

let six = array => {
    array
        .sort()
        .forEach(val => console.log(`${array.indexOf(val) + 1}.${val}`));
};

let seven = array => {
    let newArray = [];

    while (array.length != 0) {
        let minIndex = array.indexOf(Math.min(...array));
        newArray.push(...array.splice(minIndex, 1));

        let maxIndex = array.indexOf(Math.max(...array));
        newArray.push(...array.splice(maxIndex, 1));
    }

    return newArray;
};

let eight = array => {
    array.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    });

    array.forEach(val => console.log(val));
};

let nine = matrix => {
    let number = matrix[0].reduce((accumulator, val) => accumulator + val, 0);
    let diagonals = [];
    diagonals.length = matrix.length;
    diagonals.fill(0);

    let i = 0;
    for (let val of matrix) {
        let x = val.reduce((accumulator, currVal) => accumulator + currVal, 0);
        let newArray = [...matrix[i]];

        newArray.forEach((val, i) => {
            diagonals[i] += val;
        });

        if (number != x) {
            return false;
        }
        i++;
    }
    if (!diagonals.every(val => val === number)) {
        return false;
    }
    return true;
};

let ten = instructions => {
    let board = [
        [false, false, false],

        [false, false, false],

        [false, false, false],
    ];

    let isWon = (value, i) => {
        board.forEach(val =>
            val.every(otherVal => otherVal == 'X' || otherVal == 'O')
        );
    };

    let i = 0;
    for (let instruction of instructions) {
        let row = instruction[0];
        let column = instruction[2];

        if (board[row][column] != 'X' && board[row][column] != 'O') {
            if (i % 2 == 0) {
                board[row].splice(column, 1, 'X');
            } else {
                board[row].splice(column, 1, 'O');
            }
        } else {
            console.log('This place is already taken. Please choose another!');
            i--;
        }
        i++;
    }
    board.forEach(val => console.log(val.join('\t')));
};

ten(['0 1', '0 0', '0 2', '2 0', '1 0', '1 1', '1 2', '2 2', '2 1', '0 0']);
