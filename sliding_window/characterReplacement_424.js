
var characterReplacement = function (s, k) {
    let map = new Map();
    let left = 0;
    let maxFreq = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        map.set(char, (map.get(char) || 0) + 1)
        maxFreq = Math.max(maxFreq, map.get(char))

        let windowLen = right - left + 1;

        if (windowLen - maxFreq > k) {
            map.set(s[left], map.get(s[left]) - 1)
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
};
