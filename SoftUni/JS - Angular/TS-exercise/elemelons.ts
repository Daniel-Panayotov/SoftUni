interface IMelon {
	weight: number;
	melonSort: string;
	element: string[];
}

abstract class Melon implements IMelon {
	weight: number;
	melonSort: string;
	element: string[];

	constructor(weight: number, melonSort: string) {
		this.weight = weight;
		this.melonSort = melonSort;
	}

	get elementIndex(): number {
		return this.weight * this.melonSort.length;
	}

	toString(): string {
		return `Element: ${this.element[0]}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
	}
}

class WaterMelon extends Melon {
	constructor(weight: number, melonSort: string) {
		super(weight, melonSort);
		this.element = ['Water'];
	}
}

class FireMelon extends Melon {
	constructor(weight: number, melonSort: string) {
		super(weight, melonSort);
		this.element = ['Fire'];
	}
}

class EarthMelon extends Melon {
	constructor(weight: number, melonSort: string) {
		super(weight, melonSort);
		this.element = ['Earth'];
	}
}

class AirMelon extends Melon {
	constructor(weight: number, melonSort: string) {
		super(weight, melonSort);
		this.element = ['Air'];
	}
}

class Melolemonmelon extends Melon {
	constructor(weight: number, melonSort: string) {
		super(weight, melonSort);
		this.element = ['Water', 'Fire', 'Earth', 'Air'];
	}

	morph(): void {
		const oldElement = this.element.shift();
		this.element.push(oldElement);
	}
}

let watermelon: WaterMelon = new WaterMelon(12.5, 'Kingsize');
console.log(watermelon.toString());
