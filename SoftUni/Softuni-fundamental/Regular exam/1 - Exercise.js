function PasswordValidator(input) {
    let [password, ...instructions] = input;

    let instruction = instructions.shift();
    while (instruction!="Complete") {
        let [command, ...other] = instruction.split(" ");
        let [indexorCase, value] = other;

        if (command == "Replace" || command == "Make" || command == "Insert" || command == "Validation")  {
            switch(command) {
                case "Make":
                    let change = password.slice(Number(value),Number(value)+1);
    
                    if (indexorCase == "Upper") {
                        let Newchange = change.toUpperCase();
                        password = password.replace(change, Newchange);
                    }
                    else {
                        let Newchange = change.toLowerCase();
                        password = password.replace(change, Newchange);
                    }
                    console.log(password);
                    break
                case "Insert":
                    if (password[Number(indexorCase)]) {
                        let firstpart = password.slice(0,Number(indexorCase));
                        let secondpart = password.slice(Number(indexorCase));
    
                        password = firstpart + value + secondpart;
    
                        console.log(password);
                    }
                    break
                case "Replace":
                    if (password.includes(indexorCase)) {
                        let Newvalue = indexorCase.charCodeAt(0) + Number(value);
                        let Newcharacter = String.fromCharCode(Newvalue);
                        let txt = `${indexorCase}`
                        let txt2 =  txt.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
                        let re = new RegExp(txt2, `g`);
    
                        password = password.replace(re, Newcharacter);
                        console.log(password);
                    }
                    break
                case "Validation":
                    let matches = password.match(/\W/);
                    let Uppercasematch = password.match(/[A-Z]/);
                    let lowercasematch = password.match(/[a-z]/);
                    let digitmatch = password.match(/[0-9]/);
    
                    if (password.length < 8) {
                        console.log("Password must be at least 8 characters long!");
                    }
                    if (matches) {
                        console.log('Password must consist only of letters, digits and _!');
                    }
                    if (!Uppercasematch) {
                        console.log("Password must consist at least one uppercase letter!");
                    }
                    if (!lowercasematch) {
                        console.log("Password must consist at least one lowercase letter!");
                    }
                    if (!digitmatch) {
                        console.log("Password must consist at least one digit!");
                    }
                    break
            }
        }
        instruction = instructions.shift();
    }
        
}

PasswordValidator([
  'invalidpassword*', 'Add 2 p',

  'Replace i -50', 'Replace * 10',

  'Make Upper 2', 'Validation',

  'Complete'
])