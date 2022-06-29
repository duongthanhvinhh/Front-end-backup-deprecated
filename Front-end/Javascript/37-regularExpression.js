//In JavaScript, regular expressions are often used with the two string methods: search() and replace().

//Using String search() with a string:
let string = "what a nice day?";
let n = string.search("day"); //return position of string "day" = 24
let m = string.search(/day/i); //Use i to search in case in-sensitive //return position of string "day" = 24
console.log(m + n);

//Using String replace() with a string:
let p = string.replace("day", "Life");
console.log(p);
let q = string.replace(/life/i, "day");
console.log(q);

/*modifiers i,g,m:
i	Perform case-insensitive matching	
g	Perform a global match (find all matches rather than stopping after the first match)	
m	Perform multiline matching
*/


//Regular expression patterns:

let text = "ahshwhe13423645sdgsd";
// Brackets are used to find a range of characters:
// Expression	Description	Try it
// [abc]	Find any of the characters between the brackets	 -->text.match(/[h]/g);
// [0-9]	Find any of the digits between the brackets -->text.match(/[1-4]/g);	
// (x|y)	Find any of the alternatives separated with | -->text.match(/(red|green)/g);

// Metacharacters are characters with a special meaning:
// Metacharacter	Description	Try it
// \d	Find a digit	
// \s	Find a whitespace character	
// \b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	
// \uxxxx	Find the Unicode character specified by the hexadecimal number xxxx

// Quantifiers define quantities:
// Quantifier	Description	Try it
// n+	Matches any string that contains at least one n
// n*	Matches any string that contains zero or more occurrences of n
// n?	Matches any string that contains zero or one occurrences of n