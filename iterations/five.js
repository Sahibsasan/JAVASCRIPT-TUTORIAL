//forEach loop
// const coding = ["js", "py", "rb", "Cpp"]

// coding.forEach(function (val){
//     console.log(val);
// });

// coding.forEach((value) => {
//     console.log(value);
// });

function printValue(value){
    console.log(value);
}

// coding.forEach(printValue)

coding.forEach((value, index, arr) => {
    // console.log(value, index, arr);
});


const myCoding = [
    {
    languageName: "JavaScript",
    languageFile: "js"
},
{
    languageName: "Python",
    languageFile: "py"
},
{
    languageName: "Ruby",
    languageFile: "rb"
}]  

myCoding.forEach( function(val){
    console.log(val.languageName);
})