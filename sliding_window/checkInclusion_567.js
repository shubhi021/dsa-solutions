var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;

    let map1 = new Map();
    let map2 = new Map();

    for (let chr of s1) {
        map1.set(chr, (map1.get(chr) || 0) + 1)
    }
    let left = 0;
    for (let right = 0; right < s2.length; right++) {
        let char = s2[right];
        map2.set(char, (map2.get(char) || 0) + 1)
        let len = right - left + 1;

        if (len > s1.length) {
            let leftChar = s2[left];
            map2.set(leftChar, map2.get(leftChar) - 1)
            if (map2.get(leftChar) === 0) {
                map2.delete(leftChar)
            }
            left++;
        }
        if (isSame(map1, map2)) return true;
    }



    return false;

};

function isSame(a, b) {
    if (a.size !== b.size) return false;
    for (const [key, value] of a) {
        if (b.get(key) !== value) {
            return false;
        }
    }
    return true;
}
