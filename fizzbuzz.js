/**
 * FizzBuzz Function
 * Prints numbers from 1 to 100 with the following rules:
 * - For multiples of 3, print "Fizz".
 * - For multiples of 5, print "Buzz".
 * - For multiples of both 3 and 5, print "FizzBuzz".
 *
 * Approach:
 * - A brute force method would involve using multiple if conditions for
 *   each case. I then cleaned this with having`if-else`statements, which
 *   ensures clarity and avoids redundant checks.
 *
 * Edge Cases:
 * - Numbers that are neither divisible by 3 nor 5 should print themselves.
 * - Testing: Ensure proper output for boundary values like 1, 3, 5, 15, etc.
 */
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();