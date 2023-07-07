function calculator() {
    let first;
    let second;
    let result;

    function add() {
        result.value = Number(first.value) + Number(second.value);
    }

    function subtract() {
        result.value = Number(first.value) - Number(second.value);
    }

    return {
        init: (firstS, secondS, resultS) => {
            first = document.querySelector(firstS);
            second = document.querySelector(secondS);
            result = document.querySelector(resultS);
        },
        add,
        subtract,
    };
}

const calculate = calculator();

calculate.init('#num1', '#num2', '#result');
