const myObject = {
    js : 'JavaScript',
    py : 'Python',
    rb : 'Ruby',
    Cpp : 'C++'
}
// for in loop
for (const key in myObject) {
    console.log(`Key: ${key}, Value: ${myObject[key]}`);
}

//Array

const arr = [10, 20, 30, 40, 50]
for (const key in arr) {
    console.log(`key: ${key}, Value: ${arr[key]}`);
}