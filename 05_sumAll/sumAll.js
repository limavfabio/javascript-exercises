const sumAll = function sumAll(num1, num2) {
    if (typeof num1 != "number" || num1 == NaN || num1 < 0 || typeof num2 != "number" || num2 == NaN || num2 < 0) {
        return "ERROR"
    } else if (num2 < num1) {
        let numHold = num2;
        num2 = num1;
        num1 = numHold;
    }
    let total = 0
    for (let i = num1; i <= num2; i++) {
        total += i;
    }
    return total;
}



// Do not edit below this line
module.exports = sumAll;
