const reverseString = function(string) {
    const array = string.split('');
    const arrayReverse = array.reverse();
    return arrayReverse.join('');
};

// Do not edit below this line
module.exports = reverseString;
