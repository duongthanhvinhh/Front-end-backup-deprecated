function add() {
    let counter = 0;
    counter += 2;
    return counter;
}
add();
add();
console.log(counter); // the result here will be 2, because you use the let counter = 0 inside the function