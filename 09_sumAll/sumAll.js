const sumAll = function (a, b) {
    let res = 0;
    if ((a<0 || b<0) || (!Number.isInteger(a) || !Number.isInteger(b))) {
        return "ERROR";
    } else if (a < b) {
        for (let i = a; i <= b; i++) {
            res += i;
        }
    } else {
        for (let i = b; i <= a; i++) {
            res += i;
        }
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
