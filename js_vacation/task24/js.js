/*
 Write a function translate() that will translate a text into
 "rövarspråket". That is, double every consonant and place an
 occurrence of "o" in between. For example, translate("this is fun")
 should return the string "tothohisos isos fofunon".
 */

function newString(myString) {
    var vowel=["a", "e", "i", "o", "u", "y"];
    var newString = new Array(50);
    for (var i=0; i<myString.length; i++) {
        for (var j = 0; j < newString.length; j++) {
            if (myString[i] == vowel[i]) {
                newString[j] = myString[i];
            } else {
                newString[j] = myString[i];
                newString[j + 1] = "o";
            }
        }
    }
    console.log(newString);
}
newString("this is fun");

