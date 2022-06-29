/*
  JSON format file:
  "employees":[
    {"firstName":"John","lastName":"Doe"},
    {"firstName":"John","lastName":"Doe"},
    {"firstName":"John","lastName":"Doe"},
  ]
*/
//Convert a JSON text to a javascript object:
let text =
    '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const myObject = JSON.parse(text);

console.log(myObject.employees[0].firstName);
console.log(myObject.employees[1].lastName);
console.log(myObject.employees[2].lastName);
console.log(text);
//Now, to change the string text to JSON format, use: var textJSON = JSON.stringify(text); //The result will be a string following the JSON notation.

// Loading Javascript code to HTML file:  <script src="myscript.js"></script>