// const userEmail = "Sahib"

// if(userEmail){
//     console.log("Condition is truthy");
// }
// else{
//     console.log("Condition is falsy");
// }   


// const userEmail = []   //true for empty array

// if(userEmail){
//     console.log("Condition is truthy");
// }
// else{
//     console.log("Condition is falsy");
// }   

// const userEmail = ""    //false for empty string

// if(userEmail){
//     console.log("Condition is truthy");
// }
// else{
//     console.log("Condition is falsy");
// }   

//falsy values in JS = false, 0, "", null, undefined, NaN
//truthy values in JS = " ", [], {}, 1, -1, "false", "0"

// if(userEmail.length === 0){
//     console.log("array is empty");
// }


const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}