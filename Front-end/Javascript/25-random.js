const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}
let x = getRandomInt(0, 100);
console.log(x);