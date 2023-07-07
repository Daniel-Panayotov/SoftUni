function two(input) {
    let count = Number(input.shift());
    let regex = /^([\W\w]+)>(?<number>[0-9]{3})\|(?<lowercase>[a-z]{3})\|(?<uppercase>[A-Z]{3})\|(?<symbols>[^<>]{3})<\1$/

    for (let i=0;i<count;i++) {
        let encryptedpass = input.shift();
        let match = encryptedpass.match(regex);
        if (match) {
            let password = match.groups.number + match.groups.lowercase + match.groups.uppercase + match.groups.symbols
            console.log(`Password: ${password}`);
        }
        else {
            console.log("Try another password!");
        }
    }
}

two(["3",

    "##>00|no|NO|!!!?<###",

    "##>123|yes|YES|!!!<##",

    "$$<111|noo|NOPE|<<>$$"])