//Converting Strings to Numbers:
//The global method Number() can convert strings to numbers.
Number("3.14") // returns 3.14
Number(" ") // returns 0
Number("") // returns 0
Number("99 88") // returns NaN

//Converting Numbers to Strings:
String(x) // returns a string from a number variable x
String(123) // returns a string from a number literal 123
String(100 + 23) // returns a string from a number from an expression

//The Number method toString() does the same;
x.toString()
    (123).toString()
    (100 + 23).toString()

//Converting boolean to numbers:
Number(false);
Number(true);

//Automatic type conversion:
//When Javascript tries to operate on a wrong data type,it will try to convert the value to a right type.
5 + null // returns 5         because null is converted to 0
    "5" + null // returns "5null"   because null is converted to "null"
    "5" + 2 // returns "52"      because 2 is converted to "2"
    "5" - 2 // returns 3         because "5" is converted to 5
    "5" * "2" // returns 10        because "5" and "2" are converted to 5 and 2