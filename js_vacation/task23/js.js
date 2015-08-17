/*
 Write a function that takes a character (i.e. a string of length 1)
 and returns true if it is a vowel, false otherwise.
 */

(function (character) {
    var vowel = new Array("A", "E", "I", "O", "U", "Y");
    var result;
    for (var i = 0; i < vowel.length; i++) {
        if (character == vowel[i]) {
            result = true;
            break;
        } else {
            result = false;
        }
    }
    console.log(result);
})("Y");


