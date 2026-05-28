function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("H");
    console.log("I");
    console.log("B");
}

// sayMyName()

// function addTwoNumbers(num1, num2){   //num1 and num2 are function parameters
//     console.log( num1 + num2);
// }

// addTwoNumbers(5,6)  //5,6 are the arguments(values passed in parameters)
// addTwoNumbers(5,"6")
// addTwoNumbers(5,null)
// addTwoNumbers("5",6)
// addTwoNumbers(5,"a")

//const result = addTwoNumbers(5,6);
//console.log(result);  //undefined because function does not return any value, it just print


// function addTwoNumbers(num1, num2){   
    // let result = num1 + num2     //Scope= local
    // return result
    // return num1 + num2
// }

// const result = addTwoNumbers(5,6);  //Scope= global
// console.log("Result: ", result);


// function loginUserMessage(username){
    // if(!username){
    // we have to check whether the username is entered or it is undefined.
    // so we can use 2 methods for it: 
    //  1)  if(username === undefined){}
    //  2)  if(!username){}  Both have same meaning

        // console.log("Please enter a username");
        // return 
    // }
        // return `${username} just logged in`     
// }

// console.log(loginUserMessage("Sahibsasan"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())

// function calculateCartPrice(...num1){  // ... is known as rest or spread operator used to add multiple values for function into array.
// function calculateCartPrice(val1,val2, ...num1){ //in this case val1=400, val2=500 and rest will go into array [210,2000]
    // return num1
// }

// console.log(calculateCartPrice(400,500,210,2000))

// const user = {
//     username: "Sahib",
//     price: 999
// }

// function handleMyObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
// }

// handleMyObject(user)
// handleMyObject({
//     username: "Sahib",
//     price: 999
// })

const newArray = [100, 150, 200, 250]

function returnSecondIndex(getArray){
    return getArray[2]
}

console.log(returnSecondIndex(newArray))