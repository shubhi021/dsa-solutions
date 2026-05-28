var isPalindrome = function(s) {
    // Convert to lowercase and remove non-alphanumeric characters
    let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Two pointer approach
    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};
