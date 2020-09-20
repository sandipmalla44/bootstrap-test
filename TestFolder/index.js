/*

*/
"use strict";
var msg = "Hello World!" 
console.log(msg);

var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML="<p>This is from JS</p>";

// var result = {
//     name: "jquery",
//     language: "javascript",
//     score: 5,
//     showLog: function() {

//     },
//     owner: {
//         login: "sadsa",
//         id: 124321
//     }
// };

// result.phoneNumber = "01-8569321";
// console.log(result.phoneNumber);

var results = [{
    name: "jquery",
    language: "javascript",
    score: 5,
    showLog: function() {

    },
    owner: {
        login: "sadsa",
        id: 124321
    }
}, {
    name: "jquery UI",
    language: "javascript",
    score: 3,
    showLog: function() {

    },
    owner: {
        login: "sadsa",
        id: 124321
    }
}];

for (var x = 0; x < results.length; x++) {
    var result = results[x];
    if (result.score > 4) continue;
    console.log(result.name);
}
// console.log(results.length);
// console.log(results[0].name);
// results.push(result);
// results.push({
//     name: "dummy"
// });
// console.log("msg is "+ typeof(msg));
// console.log("resultDiv is "+ typeof(resultsDiv));

// var none;
// console.log("none is "+ typeof(none));

// var aNumber = 10;
// console.log("aNumber is "+ typeof(aNumber));

// var trueFalse = true;
// console.log("trueFalse is "+ typeof(trueFalse));

// //msgs = "this shouldnot work";
// if (!none) {
//     console.log("none is undefined");
// }

// if (aNumber === "10") {
//     console.log("10 is 10");
// }

// // function showMsg(msg) {
// //     console.log("showing: "+ msg);
// // }

// function showMsg(msg, more) {
//     if (!more){
//         console.log("showing: "+ msg);
//     }
//     else {
//         console.log("showing other "+ msg);
//     }
// }

// showMsg("some info");
// showMsg("next info", "more");

// var showIT = function(msg){
//     console.log(msg);
// }

// showIT("SHow MSG");

// function showItThen (msg, callback) {
//     showIT(msg);
//     callback();
// }

// showItThen("showItThen called", function() {
//     console.log("callback called");
// });

// var inGlobal = true;

// function testMe() {
//     console.log("testMe(): "+ inGlobal);

//     var someMsg = "some Message";
//     console.log("testMe(): "+ someMsg);

//     showItThen("with closure", function(){
//         showIT("testMe with closure: "+ someMsg);
//     });
// }

// testMe();