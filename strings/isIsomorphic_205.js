var isIsomorphic = function(s, t) {
    let map = new Map();
    let set = new Set();

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        // charS is already mapped
        if (map.has(charS)) {
            if (map.get(charS) !== charT) {
                return false;
            }
        } 
        // charS is not mapped yet
        else {
            // charT is already being used by another character
            if (set.has(charT)) {
                return false;
            }

            map.set(charS, charT);
            set.add(charT);
        }
    }

    return true;
};
