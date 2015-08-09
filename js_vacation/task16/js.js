/**
 * Created by ProFi on 27.07.2015.
 */

function whatToDo() {
    var time = parseInt(document.getElementById('time').value);
    var sorry = 'Sorry, you’ll have to wait or go get a snack.';
    var breakfast = 'Breakfast is served.';
    var lunch = 'Time for lunch.';
    var dinner = 'It’s dinner time.';
    if (document.getElementsByName('timePeriod')[0].checked) {
        switch (time) {
            case 0: document.getElementById('answer').value = sorry;
                break
            case 1: document.getElementById('answer').value = sorry;
                break
            case 2: document.getElementById('answer').value = sorry;
                break
            case 3: document.getElementById('answer').value = sorry;
                break
            case 4: document.getElementById('answer').value = sorry;
                break
            case 5: document.getElementById('answer').value = sorry;
                break
            case 6: document.getElementById('answer').value = breakfast;
                break
            case 7: document.getElementById('answer').value = breakfast;
                break
            case 8: document.getElementById('answer').value = breakfast;
                break
            case 9: document.getElementById('answer').value = breakfast;
                break
            case 10: document.getElementById('answer').value = sorry;
                break
            case 11: document.getElementById('answer').value = lunch;
                break
            case 12: document.getElementById('answer').value = lunch;
                break
        }
    }
    if (document.getElementsByName('timePeriod')[1].checked) {
        switch (time) {
            case 1: document.getElementById('answer').value = lunch;
                break
            case 2: document.getElementById('answer').value = sorry;
                break
            case 3: document.getElementById('answer').value = sorry;
                break
            case 4: document.getElementById('answer').value = sorry;
                break
            case 5: document.getElementById('answer').value = dinner;
                break
            case 6: document.getElementById('answer').value = dinner;
                break
            case 7: document.getElementById('answer').value = dinner;
                break
            case 8: document.getElementById('answer').value = dinner;
                break
            case 9: document.getElementById('answer').value = sorry;
                break
            case 10: document.getElementById('answer').value = sorry;
                break
            case 11: document.getElementById('answer').value = sorry;
                break
        }
    }
}