let age = 20;
let country = "India";
let text = "You can not drive";

if(country === "India"){
    if(age <= 18){
        console.log(text);
    }
    else{
        text = "You can drive";
        console.log(text);
    }
}
