let one = (arr) => {
    let sum = 0
    let sum2 = 0
    for (let i=0;i<arr.length;i++) {
        sum = sum + arr[i]
        if (arr[i] % 2==0) {
            arr[i] = arr[i] + i
        }
        else {
            arr[i] = arr[i] - i
        };
        sum2 = sum2 + arr[i]
    };
    console.log(arr)
    console.log(`before ${sum}`)
    console.log(`after ${sum2}`)
};

let two = (arr, arr2) => {
    for (let i=0;i<arr.length;i++) {
        for (let y=0;y<arr2.length;y++) {
            if (arr[i] === arr2[y]) {
                console.log(arr[y])
            };
        };
    };
};

let three = (arr, arr2) => {
    let arr3 = [];
    for (let i=0;i<arr.length;i++) {
        if (i % 2 == 0) {
            arr3.push(parseFloat(arr[i])+parseFloat(arr2[i]))
        }
        else {arr3.push(arr[i]+arr2[i])}
    };
    console.log(arr3.join(" - "))
};

let four = (arr, num) => {
    for (let i=0;i<num;i++) {
        let a =arr.shift()
        arr.push(a)
    };
    console.log(arr)
};

let five = (arr) => {
    let top = [];
    for (let i=0;i<arr.length;i++) {
        for (let y=arr.length - 1;y>i;y--) {
            if (y = i + 1 && arr[i] > arr[i+1]) {
                top.push(arr[i])
            }
            else if (arr[i] <= arr[y]) {
                break
            }
        };
    };
    top.push(arr[arr.length-1])
    console.log(top.join(" "))
};

let six = (arr) => {//pretty cool - calculates left/right from index and compares them
    let sum = 0
    if (arr.length==1) {
        console.log(0)
    }
    else {
        for (let i=1;i<arr.length;i++) {
            let sum2 = 0
            sum=sum + arr[i-1]
            for (let y=i + 1;y<arr.length;y++) {
                sum2 = sum2 + arr[y]
                if (sum2 == sum) {
                    return i
                };
            };
        };
    };
};

let seven = (arr) => {

};