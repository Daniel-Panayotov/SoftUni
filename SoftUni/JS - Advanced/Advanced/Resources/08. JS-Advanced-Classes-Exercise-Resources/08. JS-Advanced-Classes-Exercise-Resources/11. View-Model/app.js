class Textbox {
    constructor(selector, regex) {
        this._value;
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;
    }

    get elements() {
        return this._elements;
    }

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        for (let el in this._elements) {
            el.value = this._value;
        }
    }

    isValid() {
        Array.from(this._elements).forEach(val => {
            if (this._invalidSymbols.exec(val.value)) {
                return false;
            }
        });
        return true;
    }
}

let textbox = new Textbox('.textbox', /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click', function () {
    console.log(textbox.value);
});
