/*
 Define a function maxOfThree() that takes three numbers as arguments
 and returns the largest of them.
 */

function maxOfThree(a, b, c) {
    if (a > b) {
        if (a > c) {
            return a;
        } else {
            return c;
        }
    } else if (b > c) {
        return b;
    } else {
        return c;
    }
}
console.log(maxOfThree(9, 5, -123));
