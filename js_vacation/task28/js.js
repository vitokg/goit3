/**
 Write a function findLongestWord() that takes an array of words and returns
 the length of the longest one.
 */

function findLongestWord(string) {
    var newString = string.split(' ');
    var count = 1;
    for (var i = 0; i < newString.length; i++) {
        if (newString[i].length > count) {
            count = newString[i].length;
        }
    }
    console.log(newString);
    console.log(count);
}
findLongestWord("Write a function findLongestWord() that takes an array of words and returns the length of the longest one")