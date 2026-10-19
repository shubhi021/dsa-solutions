'use strict'
var isPalindrome = function (s) {
    let left = 0;
    let right = s.length-1;

    while (left < right) {
        while (left < right && !isAplhanumeric(s[left])) left++;
        while (left < right && !isAplhanumeric(s[right])) right--;

      
          if(s[left].toLowerCase() !== s[right].toLowerCase())
         {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

var isAplhanumeric = function (ch) {
    return /[a-z0-9]/i.test(ch)
}
