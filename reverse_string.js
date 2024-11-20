/**
 * Reverse a string
 * @param {string} input - The string to be reversed
 * @returns {string} - The reversed string
 *
 * Approach:
 * 1. Split the string into an array of characters.
 * 2. Reverse the array.
 * 3. Join the array back into a string.
 *
 * Challenges:
 * - First started off with a brute force approach 
 *   that involved manually iterating over the string from end to start
 *   and constructing the reversed string character by character.
 * - Instead, the built-in methods `split`, `reverse`, and `join` provide
 *   a more concise and efficient way to handle this task.
 *
 * Testing:
 * - Input: "hello" -> Expected Output: "olleh"
 * - Edge Case: Empty string "" -> Expected Output: ""
 * - Edge Case: Single character "a" -> Expected Output: "a"
 */
function reverseString(input) {
    return input.split('').reverse().join('');
}

// Test Cases
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("")); // Output: ""
console.log(reverseString("a")); // Output: "a"