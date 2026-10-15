var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    let count = {};

    for (char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (char of t) {
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }
    return true;
};
