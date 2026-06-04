// const coding = ["js", "py", "rb", "Cpp"]

// const values = coding.forEach(function (item){
//     console.log(item);
//     return item;   //this return value will not be used anywhere, forEach does not return anything.
// });

// console.log(values);  //undefined, forEach does not return anything, it is used for side effects only.


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNums.filter( (num) => num > 4) //filter method creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.
// const newNum = myNums.filter( (num) => {
//     return num > 4;   //this will return true for numbers greater than 4, and those numbers will be included in the new array.
// })//when we use filter method, we have to provide a condition inside the callback function, it will return a new array with all the elements that satisfy the condition.

// console.log(newNum);  //[5, 6, 7, 8, 9, 10]


//Another method using forEach loop

const newNum = [];
myNums.forEach( (num) => {
    if(num > 4){
        newNum.push(num);  //this will add the number to the newNum array if it is greater than 4.
    }
})
// console.log(newNum);  //[5, 6, 7, 8, 9, 10]


//Example of a data array of books title, publish year, edition and genre

const books = [
    {
        title: "Book 1", genre: "Fiction", publishYear: 2020, edition: "First"
    },
    { 
        title: "Book 2", genre: "Non-Fiction", publishYear: 2019, edition: "Second"
    },
    { 
        title: "Book 3", genre: "Fiction", publishYear: 2021, edition: "Third"
    },
    { 
        title: "Book 4", genre: "History", publishYear: 2018, edition: "First"
    },
    {
        title: "Book 5", genre: "Fiction", publishYear: 2022, edition: "Second"
    },
    {
        title: "Book 6", genre: "Non-Fiction", publishYear: 2020, edition: "Third"
    },
    {
        title: "Book 7", genre: "History", publishYear: 2019, edition: "First"
    }
];

const userBooks = books.filter( (book) => book.genre === "Fiction" && book.publishYear > 2020) //this will return a new array with all the books that are of genre Fiction and published after 2020.

console.log(userBooks);