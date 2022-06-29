// There are 4 ways to create a new date object:
//     new Date()    : creates a new date object with the current date and time
//     new Date(year, month, day, hours, minutes, seconds, milliseconds)  : creates a new date object with a specified date and time. Javascript count month
//     new Date(milliseconds) : 
//     new Date(date string) :


// Specifying a day higher than max, will not result in an error but add the overflow to the next month:
// Specifying:
// const d = new Date(2018, 5, 35, 10, 33, 30);
// Is the same as:
// const d = new Date(2018, 6, 5, 10, 33, 30);


// 4 numbers specify year, month, day, and hour:
// const d = new Date(2018, 11, 24, 10);

// 3 numbers specify year, month, and day:
// const d = new Date(2018, 11, 24);

// 2 numbers specify year and month:
// const d = new Date(2018, 11);

// You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
// const d = new Date(2018);

// One and two digit years will be interpreted as 19xx:
// const d = new Date(99, 11, 24); // Result will be Fri Dec 24 1999 00:00:00 GMT+0700 (Indochina Time)
// const d = new Date(9, 11, 24); // Result will be Fri Dec 24 1909 00:00:00 GMT+0642 (Indochina Time)

// new Date(dateString)
// new Date(dateString) creates a new date object from a date string:
// const d = new Date("October 13, 2014 11:13:00"); // Result will be Mon Oct 13 2014 11:13:00 GMT+0700 (Indochina Time)

// 01 January 1970 plus 100 000 000 000 milliseconds is approximately 03 March 1973:
// const d = new Date(100000000000); // Original time is 01 January 1970.

// January 01 1970 minus 100 000 000 000 milliseconds is approximately October 31 1966:
// const d = new Date(-100000000000);

// One day (24 hours) is 86 400 000 milliseconds.
// const d = new Date(86400000); //Return Fri Jan 02 1970 07:00:00 GMT+0700 (Indochina Time)

//The toUTCString() method converts a date to a UTC string (a date display standard).
// const d = new Date();
// d.toUTCString(); // Result will be Mon, 23 May 2022 02:40:19 GMT

// The toDateString() method converts a date to a more readable format:
// const d = new Date();
// d.toDateString(); //Result will be Mon May 23 2022

// The toISOString() method converts a Date object to a string, using the ISO standard format:
// const d = new Date();
// d.toISOString(); //Result will be in the format like: 2022-05-23T02:43:01.637Z

//Parsing Dates:Date.parse() returns the number of milliseconds between the date and January 1, 1970
// let msec = Date.parse("May 26, 2022");
// console.log(msec); //The result will be 1653498000000 seconds.



//Get date Method:
// getFullYear()	Get the year as a four digit number (yyyy)
// getMonth()	Get the month as a number (0-11)
// getDate()	Get the day as a number (1-31)
// getHours()	Get the hour (0-23)
// getMinutes()	Get the minute (0-59)
// getSeconds()	Get the second (0-59)
// getMilliseconds()	Get the millisecond (0-999)
// getTime()	Get the time (milliseconds since January 1, 1970)
// getDay()	Get the weekday as a number (0-6)
// Date.now()	Get the time. ECMAScript 5.
//Example:
let d = new Date();
console.log(d.getFullYear());
console.log(d.getTime());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMonth()); //Return result in range 0 - 11,  
//You can use the below way to return month in string name
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[d.getMonth()];
console.log(month);
console.log(d.getDate()); //Return result in range 0 - 6
//You can use the below way to return date in string name
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[d.getDay()];
console.log(day);


//Compare day:
let result = "";
let someday = new Date();
someday.setFullYear(2011);
if (someday > d) {
    result = someday;
} else {
    result = d;
}
console.log(result);