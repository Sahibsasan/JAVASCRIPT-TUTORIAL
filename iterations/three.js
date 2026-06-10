//for of loop

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    // console.log(num); //1, 2, 3, 4, 5, 6
}

const greetings = "Hello World";
for (const char of greetings) {
    if(char === " "){
        continue;   //it will skip the current iteration and move to next iteration
    }   
    // console.log(`Character in Greeting is ${char}`);
}


//MAP

const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");

// console.log(map);

for (const [key, value] of map) {
    // console.log(`Key: ${key}, Value: ${value}`);
}