var Box = /** @class */ (function () {
    function Box() {
        this.__boxes = [];
    }
    Box.prototype.add = function (element) {
        this.__boxes.push(element);
    };
    Box.prototype.remove = function () {
        this.__boxes.pop();
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this.__boxes.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
var box = new Box();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);
