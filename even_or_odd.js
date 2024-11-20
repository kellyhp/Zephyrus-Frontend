/**
 * Determine if a number is even or odd
 * @param {number} number - The input integer
 * @returns {string} - "Even" if the number is even, "Odd" if the number is odd
 *
 * Approach:
 * - A brute force approach started with repeated subtraction of 2 until
 *   reaching 0 or 1, but this is inefficient. Then narrowed this down by 
 *   using the modulus operator (%) to determine divisibility by 2.
 * - Edge Cases:
 *   - Negative numbers should work the same way as positive numbers.
 *   - Input of 0 should return "Even".
 */
function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

// Test Cases
console.log(evenOrOdd(3)); // Output: "Odd"
console.log(evenOrOdd(8)); // Output: "Even"
console.log(evenOrOdd(0)); // Output: "Even"
console.log(evenOrOdd(-5)); // Output: "Odd"