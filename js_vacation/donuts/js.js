/**
 * Created by ProFi on 21.07.2015.
 */

function updateOrder() {
    const TAXRATE=0.01;
    const DONUTPRICE=0.5;
    var numCakeDonuts = 0;
    var numGlazedDonuts = 0;
    numCakeDonuts = document.getElementById('cakedonuts').value;
    numGlazedDonuts = document.getElementById('glazeddonuts').value;
    var subtotal=(parseInt(numCakeDonuts)+parseInt(numGlazedDonuts))*DONUTPRICE;
    var tax=subtotal*TAXRATE;
    var total=subtotal+tax;
    document.getElementById('subtotal').value="$"+subtotal;
    document.getElementById('tax').value="$"+tax;
    document.getElementById('total').value="$"+total;
}

function placeOrder() {
    if (document.getElementById('name').value=="") {
        document.getElementById('errorName').value='Заполните свое имя';
    }
}
