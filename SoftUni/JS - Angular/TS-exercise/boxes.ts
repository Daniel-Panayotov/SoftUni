class Box<T> {
	private __boxes: T[] = [];

	add(element: T): void {
		this.__boxes.push(element);
	}

	remove(): void {
		this.__boxes.pop();
	}

	get count(): number {
		return this.__boxes.length;
	}
}

let box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);
