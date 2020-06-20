"use strict";

// let expressions = {
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b,
//     "*": (a, b) => a * b,
//     "/": (a, b) => a / b,
// };

let foo = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    clear: function() {
        document.querySelector("#elem1").value = "";
        document.querySelector("#elem2").value = "";
        document.querySelector(".answer").innerHTML = "Ответ:";
    },
};

let buttons = document.querySelector(".buttons");

buttons.onclick = function(e) {
    let target = event.target;
    let innerButton = target.innerHTML;

    let num1 = +document.querySelector("#elem1").value;
    let num2 = +document.querySelector("#elem2").value;
    let result = document.querySelector(".answer");

    if (target.tagName != "BUTTON") return;

    if (innerButton === "clear") foo.clear();
    else {
        return (result = result.innerHTML = `Ответ: ${foo[innerButton](
      num1,
      num2
    )}`);
    }
};

// !!! ПЕРВОЕ РЕШЕНИЕ

// let buttons = {
//     buttonPlus: document.querySelector("#plus"),
//     buttonMinus: document.querySelector("#minus"),
//     buttonTime: document.querySelector("#time"),
//     buttonDivison: document.querySelector("#division"),
//     buttonClear: document.querySelector("#clear"),
// };

// let expressions = {
//     plus: (a, b) => a + b,
//     minus: (a, b) => a - b,
//     time: (a, b) => a * b,
//     division: (a, b) => a / b,
// };
// buttons.buttonPlus.onclick = function() {
//     let result = document.querySelector(".answer");
//     let num1 = +document.querySelector("#elem1").value;
//     let num2 = +document.querySelector("#elem2").value;
//     return (result.innerHTML = `Ответ: ${expressions.plus(num1, num2)}`);
// };

// buttons.buttonMinus.onclick = function() {
//     let result = document.querySelector(".answer");
//     let num1 = +document.querySelector("#elem1").value;
//     let num2 = +document.querySelector("#elem2").value;
//     return (result.innerHTML = `Ответ: ${expressions.minus(num1, num2)}`);
// };

// buttons.buttonTime.onclick = function() {
//     let result = document.querySelector(".answer");
//     let num1 = +document.querySelector("#elem1").value;
//     let num2 = +document.querySelector("#elem2").value;
//     return (result.innerHTML = `Ответ: ${expressions.time(num1, num2)}`);
// };

// buttons.buttonDivison.onclick = function() {
//     let result = document.querySelector(".answer");
//     let num1 = +document.querySelector("#elem1").value;
//     let num2 = +document.querySelector("#elem2").value;
//     return (result.innerHTML = `Ответ: ${expressions.division(num1, num2)}`);
// };

// buttons.buttonClear.onclick = function() {
//     document.querySelector("#elem1").value = "";
//     document.querySelector("#elem2").value = "";
//     document.querySelector(".answer").innerHTML = "Ответ:";
// };