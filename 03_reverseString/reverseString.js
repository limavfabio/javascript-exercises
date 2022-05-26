const reverseString = function(string) {
    let splitString = string.split("");
    splitString.reverse();
    let result = splitString.join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;

/* 
create an array with each character or a string as an element
reverse the array
join the array as an string
return the reverted string


*/