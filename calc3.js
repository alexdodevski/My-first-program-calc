"use strict";

// let elements = {
//     c: document.querySelector(".c"),
//     plusMinus: document.querySelector(".plus__minus"),
//     percent: document.querySelector(".percent"),
//     divison: document.querySelector(".division"),
//     seven: document.querySelector(".seven"),
//     eight: document.querySelector(".eight"),
//     nine: document.querySelector(".nine"),
//     expression: document.querySelector(".expression"),
//     four: document.querySelector(".four"),
//     five: document.querySelector(".five"),
//     six: document.querySelector(".six"),
//     minus: document.querySelector(".minus"),
//     one: document.querySelector(".one"),
//     two: document.querySelector(".two"),
//     three: document.querySelector(".three"),
//     plus: document.querySelector(".plus"),
//     fraction: document.querySelector(".fraction"),
//     equals: document.querySelector(".equals"),
//     zero: document.querySelector(".zero"),
// };

// let calcButtons = document.querySelectorAll(".calc2__buttons_js");
// let out = document.querySelector(".calc2__out");
// console.log(out);

// calcButtons.forEach((item) => {
//     item.onclick = function() {
//         console.log(item);

//         if (
//             out.innerHTML == "0" &&
//             item.innerHTML !== "c" &&
//             item.innerHTML !== "0" &&
//             item.innerHTML !== "=" &&
//             item.innerHTML !== "*" &&
//             item.innerHTML !== "/"
//         )
//             out.innerHTML = item.innerHTML;
//         else if (item.innerHTML === "c") {
//             clear(out);
//         } else if (item.innerHTML === "=") {
//             out.innerHTML = eval(out.innerHTML);
//         } else {
//             out.innerHTML += item.innerHTML;
//         }
//     };
// });

// function clear(elem) {
//     elem.innerHTML = "0";
// }

// function equals(elem) {}