// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  let result = "";
  if (strs.length == 1) {
    return strs[0];
  }
  for (let i = 0; i < strs[0].length; i++) {
    let currentCharacter = strs[0][i];
    if (currentCharacter && strs.every((s) => s[i] === currentCharacter)) {
      result += currentCharacter;
    } else {
      return result;
    }
  }
  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
