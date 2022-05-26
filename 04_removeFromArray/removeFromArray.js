const removeFromArray = function(array, ...removeElementArray) {
    filteredArray = array.filter(function(x) { return removeElementArray.indexOf(x) < 0 });
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
