//get fibonacci number
function fib(n) {
    if (n > 1) {
        return fib(n - 1) + fib(n-2);
    }
    else {
        return n;
    }
}
console.log(fib(7)); //13