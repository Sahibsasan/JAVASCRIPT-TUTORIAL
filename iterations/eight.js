//Reduce method in JS
const myNums = [1, 2, 3, 4, 5];
// const myTotal = myNums.reduce(function(acc, currVal){
//     console.log(`Accumulator: ${acc}, Current Value: ${currVal}`);
//     return acc + currVal;
// }, 0);

//now with arrow function

const myTotal = myNums.reduce((acc, currVal) =>  acc+currVal, 0);

// console.log(myTotal);  //15

//The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. The reducer function takes four arguments: accumulator, currentValue, currentIndex, and array. The initial value of the accumulator can be provided as the second argument to reduce. If no initial value is provided, the first element of the array will be used as the initial accumulator value, and the iteration will start from the second element.


//Example 

const shoppingCart = [
    {itemName: "Laptop", price: 1000},
    {itemName: "Phone", price: 500},
    {itemName: "Headphones", price: 100},
    {itemName: "Charger", price: 600},
    {itemName: "magsafe", price: 1000},
    {itemName: "Screenguard", price: 100}
]

const TotalPrice = shoppingCart.reduce((acc, item) => {
    // console.log(`Accumulator: ${acc}, Current Item: ${item.price}`);
    return acc + item.price;
}, 0);
console.log(shoppingCart);
console.log(TotalPrice);  //3300