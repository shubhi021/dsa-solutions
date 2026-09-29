
var lengthOfLongestSubstring = function(s) {
    let strMap = new Map();
    let i=0;
    let max= 0;

    while(i<s.length)
    {
        if (strMap.has(s[i]))
        {
            max= Math.max(max,strMap.size)
            i = strMap.get(s[i])+1;
            strMap.clear();
        }
        else{
            strMap.set(s[i],i)
            i++;
        }
    }
    return Math.max(max,strMap.size)
};
