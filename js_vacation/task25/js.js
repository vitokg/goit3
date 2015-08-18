/*
 Define a function sum() and a function multiply() that sums and
 multiplies (respectively) all the numbers in an array of numbers.
 For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4])
 should return 24.
 */

var newArray = new Array(10);
function fillArray() {
    for (var i = 0; i < newArray.length; i++) {
        newArray[i] = Math.random() * 10;
        console.log(newArray[i]);
    }
}
fillArray();

function sumArray() {
    var sum = 0;
    for (var i = 0; i < newArray.length; i++) {
        sum = sum + newArray[i];
    }
    console.log("Sum="+sum);
}
sumArray();

function multiplyArray() {
    var multiply=1;
    for (var i=0; i<newArray.length; i++) {
        multiply=multiply*newArray[i];
    }
    console.log("Multiply="+multiply);
}
multiplyArray();