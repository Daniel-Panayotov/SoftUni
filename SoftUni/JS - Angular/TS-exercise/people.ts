interface Iemployee {
	name: string;
	age: number;
	salary: number;
	tasks: string[];
}

abstract class Employee implements Iemployee {
	name: string;
	age: number;
	salary: number;
	tasks: string[];

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
		this.salary = 0;
		this.tasks = [];
	}

	public work(): void {
		const task = this.tasks.shift();
		this.tasks.push(task);
		console.log(this.name + task);
	}

	public collectSalary(): void {
		console.log(`${this.name} received ${this.salary} this month.`);
	}
}

class Junior extends Employee {
	constructor(name: string, age: number) {
		super(name, age);
		this.tasks = [' is working on a simple task.'];
	}
}

class Senior extends Employee {
	constructor(name: string, age: number) {
		super(name, age);
		this.tasks = [
			' is working on a complicated task.',
			' is taking time off work.',
			' is supervising junior workers.',
		];
	}
}

class Manager extends Employee {
	dividened: number;
	constructor(name: string, age: number) {
		super(name, age);
		this.dividened = 0;
		this.tasks = [' scheduled a meeting.', ' is preparing a quarterly report.'];
	}

	public collectSalary(): void {
		console.log(`${this.name} received ${this.salary + this.dividened} this month.`);
	}
}

const junior = new Junior('John', 19);
const senior = new Senior('Kayle', 23);
const manager = new Manager('Tyler', 25);
