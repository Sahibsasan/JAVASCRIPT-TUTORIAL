// var a = 10     //Scope: Global
// let b = 20
// const c = 30

// if(true){
//     var a = 100    //Scope: Local
//     let b = 200
//     const c = 300

//     console.log("Inner b:", b);
//     console.log("Inner c:", c);
// }

// console.log(a)
// console.log(b)
// console.log(c)

// function one(){
//     const firstName = "Sahib"
//     function two(){
//         const lastName = "Sasan"
//         console.log(firstName + lastName);
//     }
//     // console.log(lastName); 
//     two()  
// }

// one()

// if(true){
//     const firstName = "Sahib"
//     if(true){
//         const lastName = "Sasan"
//         console.log(firstName + lastName);
//     }
//     // console.log(lastName);   
// }

// ++++++++++++++++INTERESTING++++++++++++++++++++

console.log(addOne(5))    //it is possible to execute function above function definition in this case
function addOne(num){
    return num + 1
}


// console.log(addTwo(5))  //here it shows error because function is held in a variable.
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))

