//Immediately Invoked Function Expressions (IIFE)
//It prevents function from getting polluted by global variables.

//SYNTAX :-
// (function functionName(){
//         console.log("")
// })() //execution parenthesis  (we can pass input as well.)


// (function database(){
//     console.log("DB CONNECTED")
// })();


// (function database2(){
//     let username = "sahibsasan";
//     console.log(`DB CONNECTED TWO ${username}`)
// })();


((user) => {
    console.log(`Hello JS user, ${user}`);
    
})("Sahib");