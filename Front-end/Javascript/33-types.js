/*
In JavaScript there are 5 different data types that can contain values:
string
number
boolean
object
function

There are 6 types of objects:
Object
Date
Array
String
Number
Boolean

And 2 data types that cannot contain values:
null
undefined

Difference Between Undefined and Null
undefined and null are equal in value but different in type:
        typeof undefined           // undefined
        typeof null                // object
        null === undefined         // false
        null == undefined          // true





typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"


---------------------------------Primitive Data-----------------------------------------------
A primitive data value is a single simple data value with no additional properties and methods.

The typeof operator can return one of these primitive types:
string
number
boolean
undefined


---------------------------------Complex Data------------------------------------------------
The typeof operator can return one of two complex types:
function
object

The typeof operator returns "object" for objects, arrays, and null.
The typeof operator does not return "object" for functions.
*/








/*
-----------------------------------------The "constructor" Property-------------------------------
The constructor property returns the constructor function for all javascript variables.
"John".constructor                // Returns function String()  {[native code]}
(3.14).constructor                // Returns function Number()  {[native code]}
false.constructor                 // Returns function Boolean() {[native code]}
[1,2,3,4].constructor             // Returns function Array()   {[native code]}
{name:'John',age:34}.constructor  // Returns function Object()  {[native code]}
new Date().constructor            // Returns function Date()    {[native code]}
function () {}.constructor        // Returns function Function(){[native code]}
*/