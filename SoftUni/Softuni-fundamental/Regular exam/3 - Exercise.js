function three(input) {
    let FBprofile = {};

    let instruction = input.shift();
    while(instruction!="Log out") {
        let [command, ...other] = instruction.split(": ");
        let name = other[0];
        
        switch(command) {
            case "New follower":
                if (!FBprofile[name]) {
                    FBprofile[name] = {
                        likes: 0,
                        comments: 0,
                    };
                }
                break
            case "Like":
                if (FBprofile[name]) {
                    FBprofile[name].likes += Number(other[1]);
                }
                else {
                    FBprofile[name] = {
                        likes: Number(other[1]),
                        comments: 0
                    };
                }
                break
            case "Comment":
                if (FBprofile[name]) {
                    FBprofile[name].comments += 1;
                }
                else {
                    FBprofile[name] = {
                        comments: 1,
                        likes: 0
                    };
                }
                break
            case "Blocked":
                if (FBprofile[name]) {
                    delete FBprofile[name];
                }
                else {
                    console.log(`${name} doesn't exist.`);
                }
                break
        }
        instruction = input.shift();
    }
    console.log(`${Object.keys(FBprofile).length} followers`);
    for (key in FBprofile) {
        console.log(`${key}: ${FBprofile[key].likes + FBprofile[key].comments}`);
    }
}

three([
    "Blocked: Amy",

    "Comment: Amy",

    "New follower: Amy",

    "Like: Tom: 5",

    "Like: Ellie: 5",

    "Log out"
])