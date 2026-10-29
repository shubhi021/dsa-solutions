var lengthOfLongestSubstring = function(s) {
    let seen = new Set();
    let left = 0;
    let size = 0;

    for(let right = 0; right<s.length;right++)
    {
        while(seen.has(s[right]))
        {
            seen.delete(s[left]);
            left++;
        }
        seen.add(s[right]);
        size=Math.max(size,right-left+1)
    }
    return size;
};
