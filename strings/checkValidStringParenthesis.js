
var checkValidString = function (s) {
    let minOpen = 0;
    let maxOpen = 0;

    for (char of s) {
        if (char === '(') {
            minOpen++;
            maxOpen++;
        }
        else if (char === ')') {
            minOpen--;
            maxOpen--;
        }
        else {
            minOpen--;
            maxOpen++;
        }
        if (minOpen < 0) {
            minOpen = 0;
        }
        if (maxOpen < 0) {
            return false;
        }
    }
    return minOpen === 0;
};
