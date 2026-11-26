
var findAnagrams = function (s, p) {
    let resut = [];

    let need = new Map();
    let want = new Map();

    for (let chr of p) {
        need.set(chr, (need.get(chr) || 0) + 1)
    }

    let left = 0;
    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        want.set((want.get(char) || 0) + 1)
        let len = right - left + 1;
        if (len > p.length) {
            let leftChar = s[left]
            need.set(leftChar, need.get(left) - 1)

            if (need.get(leftChar) === 0) {
                need.delete(leftChar)
            }
            left++;
        }
        if (isSame(need, want)) return resut.push(left)
    }
    return resut;
    
};

function isSame(a, b) {
    if (a.size !== b.size) {
        return false;
    }

    for (const [key, value] of a) {
        if (b.get(key) !== value) {
            return false;
        }
    }
    return true;
}
