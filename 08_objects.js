// const mySym = Symbol("mySymbol");
// const jsUser = {
//         name: "Sahib",
//         age: 20,
//         isStudent: true,
//         email: "sahib@gmail.com",
//         [mySym]: "Symbol value",
// }

// // console.log(jsUser.name);
// // console.log(jsUser[name]);

// console.log(jsUser);
// // Object.freeze(jsUser);
// jsUser.name = "Sahib Sasan";
// // console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// jsUser.greeting();

// jsUser.greetingTwo = function(){
//     console.log(`Hello, ${this.name}`);
// }
// jsUser.greetingTwo();


// object can be created using object constructor syntax
// const InstaUser = new Object();
// InstaUser.username = "sahib_sasan";
// InstaUser.name = "Sahib Sasan";
// InstaUser.age = 20;
// InstaUser.isVerified = true;

// object can be created using object literal syntax
// const InstaUser2 = {
//     username: "sahib_sasan",
//     fullname: {
//         firstName: "Sahib",
//         lastName: "Sasan",
//     },
//     age: 20,
//     isVerified: true,
//     };

// console.log(InstaUser2.fullname);


// const obj1 = {1: "a", 2: "b", 3: "c"}
// const obj2 = {4: "d", 5 : "e", 6: "f"}

// // const obj3 = { obj1, obj2}
// // console.log(obj3);
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

//Object de struture

// const Course = {
//     courseInstructor: "Hitesh",
//     courseName: "Javascript",
// }

// console.log(Course.courseInstructor);
// const {courseInstructor: Instructor} = Course;
// console.log(Instructor);

//JSON syntax 

// {
//     "courseName": "Javascript",
//     "courseInstructor": "Hitesh",
// }

//JSON= Javscript Object Notation
// [
//     {},
//     {},
//     {},
// ]
