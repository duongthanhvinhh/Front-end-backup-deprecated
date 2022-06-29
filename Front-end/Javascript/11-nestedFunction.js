function increment() {
    var counter = 0;

    function plus() { counter += 2; }
    plus();
    return counter;
}
console.log(increment());