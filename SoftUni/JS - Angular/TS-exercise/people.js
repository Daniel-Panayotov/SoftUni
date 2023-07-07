var __extends =
	(this && this.__extends) ||
	(function () {
		var extendStatics = function (d, b) {
			extendStatics =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function (d, b) {
						d.__proto__ = b;
					}) ||
				function (d, b) {
					for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
				};
			return extendStatics(d, b);
		};
		return function (d, b) {
			if (typeof b !== 'function' && b !== null)
				throw new TypeError(
					'Class extends value ' + String(b) + ' is not a constructor or null',
				);
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
		};
	})();
var Employee = /** @class */ (function () {
	function Employee(name, age) {
		this.name = name;
		this.age = age;
		this.salary = 0;
		this.tasks = [];
	}
	Employee.prototype.work = function () {
		var task = this.tasks.shift();
		this.tasks.push(task);
		console.log(this.name + task);
	};
	Employee.prototype.collectSalary = function () {
		console.log(''.concat(this.name, ' received ').concat(this.salary, ' this month.'));
	};
	return Employee;
})();
var Junior = /** @class */ (function (_super) {
	__extends(Junior, _super);
	function Junior(name, age) {
		var _this = _super.call(this, name, age) || this;
		_this.tasks = [' is working on a simple task.'];
		return _this;
	}
	return Junior;
})(Employee);
var Senior = /** @class */ (function (_super) {
	__extends(Senior, _super);
	function Senior(name, age) {
		var _this = _super.call(this, name, age) || this;
		_this.tasks = [
			' is working on a complicated task.',
			' is taking time off work.',
			' is supervising junior workers.',
		];
		return _this;
	}
	return Senior;
})(Employee);
var Manager = /** @class */ (function (_super) {
	__extends(Manager, _super);
	function Manager(name, age) {
		var _this = _super.call(this, name, age) || this;
		_this.dividened = 0;
		_this.tasks = [' scheduled a meeting.', ' is preparing a quarterly report.'];
		return _this;
	}
	Manager.prototype.collectSalary = function () {
		console.log(
			''.concat(this.name, ' received ').concat(this.salary + this.dividened, ' this month.'),
		);
	};
	return Manager;
})(Employee);
var junior = new Junior('John', 19);
var senior = new Senior('Kayle', 23);
var manager = new Manager('Tyler', 25);

console.log(junior);
console.log(senior);
console.log(manager);
