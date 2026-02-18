let score = "100";
console.log(typeof score); // string
// conversion from string to number
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number

let score2 = "100abc";
console.log(typeof score2); // string
// conversion from string to number
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2); // number
console.log(valueInNumber2); // NaN

// "100" -> 100
// "100abc" -> NaN
// true -> 1 , false -> 0
// null -> 0
// " " -> false , "sahib" -> true
