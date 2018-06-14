"use strict;"
// function createDate() {
//     let date = new Date();
//
//     return date.toLocaleString();
// }

//
//
// let promise = new Promise(function (resolve, reject) {
//
//     setTimeout(function () {
//         resolve(createDate())
//     }, 2000);
//
//     // resolve ~ str (дата / время .... )
//
//     setTimeout(function (){reject(createDate())}, 5000);
//
// });
// promise
// // .then(function (resolve){alert(resolve)})
//     .then(function (result) {
//         console.log(result);
//
//         return new Promise(function (resolve) {
//             setTimeout(function () {
//                 resolve(createDate())
//             }, 2000);
//         });
//         // return setTimeout(function () {return createDate()}, 2000);
//     })
//
//     .then(function (result) {
//         console.log(result)
//     })
// .catch(function (reject){alert('что-то пошло не так -  ${reject}')});


function createDate() {
    let date = new Date();

    return date.toLocaleString();
}


function promiseCallback(timeout) {
    return new Promise(function (resolve, reject) {

        setTimeout(function (){resolve(createDate())}, timeout);

        // resolve ~ str (дата / время .... )

        setTimeout(function (){reject(createDate())}, 25000);

    });
}

// console.log('start time: ' + new Date().toLocaleString());
console.log('start time: ' + createDate());



promiseCallback(1000)
    .then(function (result) {
        console.log(result);

        return promiseCallback(1000);
    })

    .then(function (result) {
        console.log(result);

        return promiseCallback(4000);
    })

    .then(function (result) {
        console.log(result);

        return promiseCallback(9000);
    })

    .then(function (result) {
        console.log(result)
    })

    .catch(function (reject){
        alert(`Rejected: ${reject}`)

    });




