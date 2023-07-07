//1
(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        return this.slice(n - 1);
    };

    Array.prototype.take = function (n) {
        return this.slice(0, this.length - n + 1);
    };

    Array.prototype.sum = function () {
        return this.reduce((accumulator, currVal) => accumulator + currVal, 0);
    };

    Array.prototype.average = function () {
        let avg = this.length;
        return this.reduce((accumulator, currVal) => accumulator + currVal, 0) / avg;
    };
});

//2

//3
function extensibleObject() {
    function ExtendedObj() {}

    ExtendedObj.prototype.extend = function (template) {
        Object.entries(template).forEach(([key, val]) => {
            if (val instanceof Function) {
                Object.getPrototypeOf(this)[key] = val;
            } else {
                this[key] = val;
            }
        });
    };

    return new ExtendedObj();
}

//4
class Ballon {
    constructor(color, hasWeight) {
        this.color = color;
        this.hasWeight = hasWeight;
    }
}

function solve() {
    class PartyBallon extends Ballon {
        constructor(color, hasWeight, ribbonColor, ribbonLength) {
            super(color, hasWeight);
            this.ribbon = {
                color: ribbonColor,
                length: ribbonLength,
            };
        }

        get ribbon() {
            return this.ribbon;
        }
    }

    class BirthdayBallon extends PartyBallon {
        constructor(color, hasWeight, ribbonColor, ribbonLength, text) {
            super(color, hasWeight, ribbonColor, ribbonLength);
            this.text = text;
        }

        get text() {
            return this.text;
        }
    }

    return {
        Ballon,
        PartyBallon,
        BirthdayBallon,
    };
}

//5
function solution() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.counter = 0;
            this.salary = 0;
        }

        work() {
            if (this.tasks.length > this.counter) {
                console.log(this.tasks[this.counter]);
            } else {
                this.counter = 0;
                console.log(this.tasks[this.counter]);
            }
            this.counter++;
        }

        collectSalary() {
            console.log(
                `${this.name} received ${
                    this.salary + (this.dividend ? this.dividend : 0)
                } this month.`
            );
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${this.name} is working on a simple task.`];
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                `${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.`,
            ];
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks = [
                `${this.name} is scheduled a meeting.`,
                `"${this.name} is preparing a quarterly report.`,
            ];
        }
    }
    return {
        Employee,
        Junior,
        Senior,
        Manager,
    };
}

//6

function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\n`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let result = Array.from(this.comments)
                .map(val => ` * ${val}`)
                .join('\n');

            return (
                super.toString() +
                `Rating: ${this.likes - this.dislikes}` +
                (result.length > 0 ? `\nComments:\n${result}` : '')
            );
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `Views: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost,
    };
}

//7

function solution() {
    class Item {
        constructor(manufacturer) {
            this.manufacturer = manufacturer;
        }
    }
    class Computer extends Item {
        constructor(manufacturer, processorSpeed, hardDiskSpace, ram) {
            super(manufacturer);
            this.processorSpeed = processorSpeed;
            this.hardDiskSpace = hardDiskSpace;
            this.ram = ram;
        }
    }
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, hardDiskSpace, ram, weight, color, battery) {
            super(manufacturer, processorSpeed, hardDiskSpace, ram);
            this.weight = weight;
            this.color = color;
            this._battery = this.battery;
        }

        set battery(battery) {
            if (battery instanceof Battery == 'false') {
                throw new TypeError();
            }
            this._battery = battery;
        }

        get battery() {
            return this._battery;
        }
    }
    class Keyboard extends Item {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }
    class Monitor extends Item {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }
    class Battery extends Item {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    return { Laptop, Keyboard, Monitor, Battery };
}
