class KeyValuePair<T, U> {
	key: T;
	value: U;

	setKeyValue(key: T, value: U): void {
		this.key = key;
		this.value = value;
	}

	display(): void {
		console.log(`key = ${this.key}, value = ${this.value}`);
	}
}

let kvp = new KeyValuePair<number, string>();
kvp.setKeyValue(1, 'Steve');
kvp.display();
