let one = (input) => {
    let catpattern = /(?<name>[A-Za-z0-9]+) (?<age>\d+)/

    class CreateCat{
        constructor(CatName, CatAge) {
            this.name = CatName;
            this.age = CatAge;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (cat of input) {
        let attribute = catpattern.exec(cat)
        let [match, name, age] = attribute
        let MyCat = new CreateCat(name, Number(age))
        MyCat.meow()
    }
}

let two = (input) => {
    let count = input.shift()
    let songs = {}

    for (let i=0; i<count;i++) {
        let song = input[i].split("_")
        if (songs[song[0]]) {
            songs[song[0]].name.push(song[1])
        }
        else {
            songs[song[0]] = {}
            songs[song[0]].name = []
            songs[song[0]].name.push(song[1])
        }
    }

    for (const song of songs[input[input.length - 1]].name) {
        console.log(song)
    }
}
