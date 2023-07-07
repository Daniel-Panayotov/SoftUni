var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    Object.defineProperty(Melon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Melon.prototype.toString = function () {
        return "Element: ".concat(this.element[0], "\nSort: ").concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex);
    };
    return Melon;
}());
var WaterMelon = /** @class */ (function (_super) {
    __extends(WaterMelon, _super);
    function WaterMelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = ['Water'];
        return _this;
    }
    return WaterMelon;
}(Melon));
var FireMelon = /** @class */ (function (_super) {
    __extends(FireMelon, _super);
    function FireMelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = ['Fire'];
        return _this;
    }
    return FireMelon;
}(Melon));
var EarthMelon = /** @class */ (function (_super) {
    __extends(EarthMelon, _super);
    function EarthMelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = ['Earth'];
        return _this;
    }
    return EarthMelon;
}(Melon));
var AirMelon = /** @class */ (function (_super) {
    __extends(AirMelon, _super);
    function AirMelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = ['Air'];
        return _this;
    }
    return AirMelon;
}(Melon));
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = ['Water', 'Fire', 'Earth', 'Air'];
        return _this;
    }
    Melolemonmelon.prototype.morph = function () {
        var oldElement = this.element.shift();
        this.element.push(oldElement);
    };
    return Melolemonmelon;
}(Melon));
var watermelon = new WaterMelon(12.5, 'Kingsize');
console.log(watermelon.toString());
