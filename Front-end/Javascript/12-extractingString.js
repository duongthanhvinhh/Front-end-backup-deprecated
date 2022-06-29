let string = "ABCDEFGHIJKLMN";
console.log(string.slice(3, 5)); //The Output is DE
console.log(string.slice(3));
console.log(string.slice(-5, -2)); //The Output is JKL
console.log(string.slice(-5));


console.log(string.substring(-2, 2)); //Same as slice, The difference is that start and end values less than 0 are treated as 0 in substring()


console.log(string.substr(2, 3)); //Same as slice, The difference is that the second parameter specifies the length of the extracted part.


let string1 = string.charAt(1);
let string2 = string.charCodeAt(1);
console.log(string1); //The out put will be "B"
console.log(string2); //The out put will be UTF-16 code of character "B"

//Property Access: 
let string4 = string[1];
console.log(string4);
/*The difference between property access and charAt/charcodeAt is:
It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!)*/


//Some escape sequences are valid in Javascript:
//      \\ Inserts a backslash in a string
//      \b Backspace
//      \f Form Feed
//      \n New Line
//      \r Carriage Return
//      \t Horizontal Tabulator
//      \v Vertical Tabulator