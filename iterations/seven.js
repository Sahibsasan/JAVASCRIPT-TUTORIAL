const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map( (num) => num + 10)  //map method creates a new array with the results of calling a provided function on every element in the calling array. It does not modify the original array.

console.log(newNums);  //[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]