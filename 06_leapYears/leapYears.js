const leapYears = function(year) {
    if (divisibleByFourHundred(year) === true) {
        return true;
    } else if (divisibleByFour(year) === true && divisibleByHundred(year) === false) {
        return true;
    } else {
        return false;
    }
}



function divisibleByFour(num) {
    if (num % 4 === 0) {
        return true
    } else {
        return false
    }
}

function divisibleByHundred(num) {
    if (num % 100 === 0) {
        return true
    } else {
        return false
    }
}

function divisibleByFourHundred(num) {
    if (num % 400 === 0) {
        return true
    } else {
        return false
    }
} 
// Do not edit below this line
module.exports = leapYears;
