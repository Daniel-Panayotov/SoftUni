function sort(array) {
    array.sort((a, b) => a - b);
    
    let length = array.length/2 % 2 == 0 ? Math.ceil(array.length/2) :  Math.ceil(array.length/2) - 1;
    // Math.floor(array.length/2)

    return array.splice(length);
};

function pieceOfPie(array, start, end) {    
    let startIndex = array.indexOf(start);
    let endIndex = array.indexOf(end, startIndex + 1)+1;

    return array.slice(startIndex, endIndex);
};

function Process(array) {

    let result = array
        .filter((val, i) => i % 2 != 0)
        .map((val) => val*2)
        .reverse()
        .join(" ");

    console.log(result);

};

function solveMatrix(matrix) {
    let main = 0;
    let secondary = 0;

    for (let r = 0;r < matrix.length;r++) {
        main+=matrix[r][r];
        secondary+=matrix[r][matrix.length-(r+1)]
    };

    console.log(`${main} ${secondary}`);
};

solveMatrix(
    [[3, 5, 17]
    ,[-1, 7, 14]
    ,[1, -8, 89]]
);


