"use strict";

let out = document.querySelector(".calc__out");
let calc = document.querySelector(".calc");
console.log(calc);

// let arrSigns = [
//     "+",
//     "-",
//     "/",
//     "*",
//     ".",
//     "(",
//     ")",
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
// ];

function insert(num) {
    let outInner = out.value;
    let plus = "+";
    let minus = "-";
    let division = "/";
    let multiplication = "*";
    let dot = ".";
    let roundBracketLeft = "(";
    let roundBracketRight = ")";
    let mark = outInner.length + 1;

    if (
        num === plus ||
        num === minus ||
        num === multiplication ||
        num === division ||
        num === dot
    ) {
        for (let i = outInner.length; i < mark; i++) {
            if ((num === division && i < 1) || (num === multiplication && i < 1)) {
                out.value += "";
            } else if (
                outInner[i - 1] === plus ||
                outInner[i - 1] === minus ||
                outInner[i - 1] === division ||
                outInner[i - 1] === multiplication ||
                outInner[i - 1] === dot
            ) {
                out.value += "";
            } else {
                out.value += num;
            }
        }
    } else if (num === roundBracketLeft) {
        for (let i = outInner.length; i < mark; i++) {
            if (i < 1) {
                out.value += num;
            } else if (
                outInner[i - 1] === plus ||
                outInner[i - 1] === minus ||
                outInner[i - 1] === multiplication ||
                outInner[i - 1] === division
            ) {
                out.value += num;
            } else {
                out.value += "";
            }
        }
    } else if (num === roundBracketRight) {
        for (let i = outInner.length; i < mark; i++) {
            if (
                (outInner.includes("(") && isFinite(outInner[i - 1])) ||
                outInner[i - 1] === roundBracketRight
            ) {
                out.value += num;
            } else {
                out.value += "";
            }
        }
    } else {
        out.value += num;
    }
}

function clearOut() {
    out.value = "";
}

function equal() {
    if (eval(out.value) === Infinity) {
        out.value = "it`s impossible";
        out.style.fontSize = 25 + "px";
    } else if (eval(out.value) === undefined) {
        out.value = "";
    } else out.value = eval(out.value);
}

function backSpace() {
    out.value = out.value.substr(0, out.value.length - 1);
}

out.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        equal();
    }
});

calc.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        e.returnValue = false;
        equal();
    } else if (e.keyCode === 67) {
        clearOut();
    }
});