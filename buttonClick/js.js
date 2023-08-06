let num1 = 9;
let num2 = 3;
let num3 = 7;

function looper() {
    for (let i = 0; i <= 75; i++) {
        if (i % num1 === 0) {
            console.log(i, "Double")
        } else if (i % num2 === 0) {
            console.log(i, "single")
        } else if (i % num3 === 0) {
            console.log(i, "SLEVEN")
        } else {
            console.log(i)
        }
    }
}

looper();
