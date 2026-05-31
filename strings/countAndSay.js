/**
 * LeetCode 38. Count and Say
 *
 * Idea:
 * Start with "1" (the first term).
 * For each next term, count consecutive identical digits
 * in the current string and build a new string in the
 * format: count + digit.
 *
 * Example:
 * "21" -> one 2, one 1 -> "1211"
 *
 * Time Complexity: O(L)
 * Space Complexity: O(L)
 * where L is the length of the generated string.
 */

var countAndSay = function(n) {

    // Base case: first term of the sequence
    let result = "1";

    // Generate terms from 2 to n
    for (let i = 2; i <= n; i++) {

        let current = "";
        let count = 1;

        // Traverse current term and count consecutive digits
        // We iterate until result.length so that the last group
        // is also processed when result[j] becomes undefined.
        for (let j = 1; j <= result.length; j++) {

            if (result[j] === result[j - 1]) {
                // Same digit -> extend current group
                count++;
            } else {
                // Different digit -> append count and digit
                current += count + result[j - 1];

                // Reset count for the next group
                count = 1;
            }
        }

        // Newly generated term becomes the current term
        result = current;
    }

    return result;
};
