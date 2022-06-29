let number = 567;
var greeting = "";
if (number < 10) {
    greeting = "Hello small number";
} else if (number < 100) {
    greeting = "Hello number";
} else {
    greeting = "Hello large number";
}
console.log(greeting);

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
    case 6:
        day = "Weekend";
        break;
    default:
        day = "500 Server Internal Error";
}
console.log("Today is: " + day);



/* Switch case use strict comparision: The values must be of the same type to match
i.e: There is no match in the below case:

let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
*/