//indexOf() and lastIndexOf() method returns the index of(the position of) the first and the last occurence of a specified text in a string:
let str = "Please locate where 'locate' occurs!";
let num1 = str.indexOf("locate"); //the out put will be 7
let num2 = str.lastIndexOf("locate"); //the out put will be 21
let num3 = str.indexOf("TMA"); //the output will be -1, because there are no TMA in the string.
console.log(str.indexOf("locate", 15)); //the output will be 21 because, the search starts at position 15
console.log(str.lastIndexOf("locate", 15)); //the output will be 7 , the search starts from the end to the beginning in this case

console.log(str.search("locate")); //the output will be 7, the search method returns the first position of the match

/*
The difference between indexOf and search is:
The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
*/