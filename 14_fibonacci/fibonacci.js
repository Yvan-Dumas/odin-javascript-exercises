const fibonacci = function (int) {
    let number = parseInt(int);
    if (number < 0) {
        return "OOPS";
    }
    let array = [];
    array.push(1);
    array.push(1);
    switch (number) {
        case 0: return 0;
            break;
        case 1: return array[0];
            break;
        case 2: return array[1];
            break;
        default:
            for (let i = 2; i < number; i++) {
                array.push(array[i - 2] + array[i - 1]);
            }
            return array[number - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
