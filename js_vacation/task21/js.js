function maxNumber(firstNumber, secondNumber) {
    var firstNumber = parseInt(document.getElementById('firstNumber').value);
    var secondNumber = parseInt(document.getElementById('secondNumber').value);
    if (firstNumber > secondNumber) {
        document.getElementById('maxNumber').value = firstNumber + " is max";
    } else {
        document.getElementById('maxNumber').value = secondNumber + " is max";
    }
}