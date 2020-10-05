// let amount = Number.parseFloat(123.12)
// amount = amount.toString();

// let amount;
// showMessage(amount);

// let myfunction = function loggingFunction(message, firstParam) {
//     console.log(message + " " + firstParam);
//     console.log(firstParam);
// }

// myfunction("hey","Baby");

// function showMessage(message) {
//     console.log(message);
// }

// showMessage("hey");

// let key = 42;
// function getSecretCode(value) {
//     let keyGenerator = function() {
//         let key = 12;
//         console.log('in key Generator: ',key);
//         return key;
//     }
//     let code = value * keyGenerator();
//     console.log('in getSecretCode: ',key);
//     return code;
//   }

//   //showMessage(getSecretCode(3));
//   let secretCode = getSecretCode(1);

//   changePercentOFF(50);

//let mySymbol = Symbol();

// let person = {
//     name: 'Sandy',
//     age: 25,
//     parttime: false
// };

// function incrementAge(person) {
//     person.age++;
// }

// incrementAge(person);

// showMessage(person.age);

// let now = new Date();

// showMessage(now.toDateString);

// const header = document.getElementById('message');

// header.style.fontWeight = '100';
'use strict'
const button = document.getElementById('see-review');

button.addEventListener('mouseover', function () {
    const review = document.getElementById('review');
    if (review.classList.contains('d-none')){
        review.classList.remove('d-none');
        button.textContent = 'Close Review';
    }
    else{
        review.classList.add('d-none');
        button.textContent = 'See Review';
    }
});
let productId = '123';

console.log(productId);
//const containers = document.getElementsByClassName('container');

//containers[0].classList.add('d-none');
//console.log(containers);
// const values = ['a', 'b', 'ccc', 'd', 'e'];

// //values.splice(2, 1, 'f');
// values.forEach(function(item){
//     console.log(item);
// })
// const found = values.find(function(item){
//     //console.log('item: ', item);
//     return item == 'cc';
// })
// console.log(found);