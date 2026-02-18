// let age = 20;
// let country = "India";
// let text = "You can not drive";

// if(country === "India"){
//     if(age <= 18){
//         console.log(text);
//     }
//     else{
//         text = "You can drive";
//         console.log(text);
//     }
// }

let time = 10;
if(time < 12){
    console.log("Good Morning");
}
else if(time < 18 && time >= 12){
    console.log("Good Afternoon");
}
else if(time < 21 && time >= 18){
    console.log("Good Evening");
}
else{
    console.log("Good Night");
}