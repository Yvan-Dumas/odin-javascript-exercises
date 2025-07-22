const palindromes = function (str) {
    let clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let rev = clean.split("").reverse().join("");

    if (rev == clean) {
        return true
    }
    return false
};

// Do not edit below this line
module.exports = palindromes;
