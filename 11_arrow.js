// const user = {
//     username: "sahibsasan",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , Welcome to website.`);
//         console.log(this);
//     }
    
// }

// user.welcomeMessage();
// user.username = "gurnoor";
// user.welcomeMessage();

// console.log(this);

// function name(){
//     let username = "sahib";
//     console.log(this.username)  //this does'nt work in function, it only works in objects.
// }
// name()  


//      -----ARROW FUNCTION-----

// const message = () => {
//     console.log("This is an Arrow function")
// }

// message()

// const thisCheckInArrow = () => {
//     let username = "Sahib";
//     console.log(this)  //Result= {}
//     console.log(this.username)  //Result= undefined
    
//     //console.log(this) doesnot works in arrow function, it only works in normal function.
// }

// thisCheckInArrow()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2  //return keyword only needed when using {}.
const addTwo = (num1, num2) => (num1 + num2)  //return keyword not required when using ().
console.log(addTwo(4,5))