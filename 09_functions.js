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


function loginUserMessage(username){
    if(!username){
    // we have to check whether the username is entered or it is undefined.
    // so we can use 2 methods for it: 
    //  1)  if(username === undefined){}
    //  2)  if(!username){}  Both have same meaning

        console.log("Please enter a username");
        return 
    }
    else{
        return `${username} just logged in` 

    }
}

console.log(loginUserMessage("Sahibsasan"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())