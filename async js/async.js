// function hello(){
//     console.log("Hello World!");
// }
// console.log("Hey!");
// setTimeout(hello, 2000);
// console.log("Hey!");

function getData(data, getNextData){
    setTimeout(() => {
        console.log('Data =', data);
        if(getNextData){
            getNextData();
        }
    }, 5000);
}


// Callback hell
// getData(1, () => {
//     console.log("Getting Data2 ....")
//     getData(2, () => {
//         console.log("Getting Data2 ....")
//         getData(3, () => {
//             console.log('All data received');
//         });
//     });
// });

// getData(1);

// Promises

// let promise = new Promise((resolve, reject) => {
//     console.log("Hello World");
//     resolve("Success");
// })

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Data =', dataId);
//             resolve('success');
//         }, 5000);
//     });
// }   

// let promise = getData();
// promise.then(() => {
//     console.log("Getting Data2 ....");
//     getData(2).then(() => {
//         console.log("Getting Data3 ....");
//         getData(3).then(() => {
//             console.log('All data received');
//         });
//     });
// });


//Promise chain
getData(1)
.then(() => {
    return getData(2);
});
.then(() => {
    return getData(3);  
});
.then(() => {
    console.log('All data received');
});

// Async-await

// async function getAllData(){
//     await getData(1);
//     console.log("Getting Data2 ....");
//     await getData(2);
//     console.log("Getting Data3 ....");
//     await getData(3);
//     console.log('All data received');
// }


//using iife

(async () => {
    await getData(1);
    console.log("Getting Data2 ....");
    await getData(2);
    console.log("Getting Data3 ....");
    await getData(3);
    console.log('All data received');
})();