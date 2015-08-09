/**
 * Created by ProFi on 25.07.2015.
 */

function pluralize() {
    var numberFirst = parseInt(document.getElementById('numberFirst').value);
    var numberSecond = parseInt(document.getElementById('numberSecond').value);
    var resultFirst, resultSecond;
    if (numberFirst == 1) {
        if (document.getElementsByName('animal')[0].checked) {
            resultFirst = numberFirst + " " + 'cat';
        } else if (document.getElementsByName('animal')[1].checked) {
            resultFirst = numberFirst + " " + 'dog';
        } else if (document.getElementsByName('animal')[2].checked) {
            resultFirst = numberFirst + " " + 'sheep';
        } else  if (document.getElementsByName('animal')[3].checked) {
            resultFirst = numberFirst + " " + 'goose';
        }
    } else if (document.getElementsByName('animal')[0].checked) {
        resultFirst = numberFirst + " " + 'cats';
    } else if (document.getElementsByName('animal')[1].checked) {
        resultFirst = numberFirst + " " + 'dogs';
    } else if (document.getElementsByName('animal')[2].checked) {
        resultFirst = numberFirst + " " + 'sheeps';
    } else  if (document.getElementsByName('animal')[3].checked) {
        resultFirst = numberFirst + " " + 'geese';
    }
    if (numberSecond == 1) {
        if (document.getElementsByName('animalPlus')[0].checked) {
            resultSecond = numberSecond + " " + 'cat';
        } else if (document.getElementsByName('animalPlus')[1].checked) {
            resultSecond = numberSecond + " " + 'dog';
        } else if (document.getElementsByName('animalPlus')[2].checked) {
            resultSecond = numberSecond + " " + 'sheep';
        } else  if (document.getElementsByName('animalPlus')[3].checked) {
            resultSecond = numberSecond + " " + 'goose';
        }
    } else if (document.getElementsByName('animalPlus')[0].checked) {
        resultSecond = numberSecond + " " + 'cats';
    } else if (document.getElementsByName('animalPlus')[1].checked) {
        resultSecond = numberSecond + " " + 'dogs';
    } else if (document.getElementsByName('animalPlus')[2].checked) {
        resultSecond = numberSecond + " " + 'sheeps';
    } else  if (document.getElementsByName('animalPlus')[3].checked) {
        resultSecond = numberSecond + " " + 'geese';
    }
    document.getElementById('result').value=resultFirst + " " + resultSecond;
}
