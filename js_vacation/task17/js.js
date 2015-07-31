/**
 * Created by ProFi on 27.07.2015.
 */
function createTable() {
    var newElement = document.createElement("table");
    newElement.border = 1;
    var i;
    for (i = 0; i < 41; i++) {
        var newRow = newElement.insertRow(i);
        var newCell = newRow.insertCell(0);
        newCell.width = "200";
        newCell.align = "center";
        newCell.innerHTML=i*5;
        var newCell = newRow.insertCell(1);
        newCell.width = "200";
        newCell.align = "center";
        newCell.innerHTML = parseInt((i*5-32)/1.8);
        document.body.appendChild(newElement);
    }
}
