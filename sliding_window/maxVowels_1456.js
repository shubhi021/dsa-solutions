var maxVowels = function (s, k) {
    let count = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])

    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) count++;
    }
    let best = count;

    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) count++;
        if (vowels.has(s[i - k])) count--;
        best = Math.max(best, count)
    }
    return best;
};
