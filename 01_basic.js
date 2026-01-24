// console.log("Hello world!");
// let age;
// if(age >= 18){
//     console.log("You can vote")
// }
// else{
//     console.log("You cannot vote")
// }

// let num;
// num = prompt("Enter a number: ");
// console.log(num);
// if(num % 5 === 0){
//     console.log("Divisible by 5");
// }
// else{
//     console.log("Not divisible by 5");
// }

const accoundId = 12345;
let accoundEmail = "Sahib@gmail.com";
var accoundPassword = "admin123";
accountCity = "Delhi";

// acountId = 2 // not allowed
accoundEmail = "abc@gmail.com";
accoundPassword = "root123";
accountCity = "Noida";

console.log(accoundId);

/*
Prefer not to use var because it is function scoped
Use let and const which are block scoped
 */

console.table([accoundId, accoundEmail, accoundPassword, accountCity]);

