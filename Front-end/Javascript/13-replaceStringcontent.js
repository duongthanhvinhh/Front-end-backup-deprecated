let string = "Please input your name - your name"; //By default, the replace() method replaces only the first match.
let new_string = string.replace("your name", "your password");
let new_string1 = string.replace("YOUR NAME", "your password"); //By default, the replace() method is case sensitive. Writing YOUR NAME (with upper-case) will not work
let new_string2 = string.replace(/YOUR NAME/i, "your password"); //To replace case insensitive UPPERCASE above, use a regular expression with an /i flag (insensitive)
let new_string3 = string.replace(/your name/g, "your password"); //To replace all matches
console.log("new_string1 is" + " " + new_string);
console.log("new_string1 is" + " " + new_string1);
console.log("new_string2 is" + " " + new_string2);
console.log("new_string3 is" + " " + new_string3);