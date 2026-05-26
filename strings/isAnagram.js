var isAnagram = function(s, t) {

    // If lengths are different, they can't be anagrams
    if (s.length !== t.length) {
        return false;
    }

    let count = {};

    // Count characters from s
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    // Remove counts using t
    for (let char of t) {

        // Character not found
        if (!count[char]) {
            return false;
        }

        count[char]--;
    }

    return true;
};
