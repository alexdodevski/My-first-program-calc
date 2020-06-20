"use strict";

let out = document.querySelector(".calc2__out");

function insert(num) {
    let outInner = out.innerHTML;
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
            if (num === division || (num === multiplication && i < 1)) {
                out.innerHTML += "";
            } else if (
                outInner[i - 1] === plus ||
                outInner[i - 1] === minus ||
                outInner[i - 1] === division ||
                outInner[i - 1] === multiplication ||
                outInner[i - 1] === dot
            ) {
                out.innerHTML += "";
            } else {
                out.innerHTML += num;
            }
        }
    } else if (num === roundBracketLeft) {
        for (let i = outInner.length; i < mark; i++) {
            if (i < 1) {
                out.innerHTML += num;
            } else if (
                outInner[i - 1] === plus ||
                outInner[i - 1] === minus ||
                outInner[i - 1] === multiplication ||
                outInner[i - 1] === division
            ) {
                out.innerHTML += num;
            } else {
                out.innerHTML += "";
            }
        }
    } else if (num === roundBracketRight) {
        for (let i = outInner.length; i < mark; i++) {
            if (
                (outInner.includes("(") && isFinite(outInner[i - 1])) ||
                outInner[i - 1] === roundBracketRight
            ) {
                out.innerHTML += num;
            } else {
                out.innerHTML += "";
            }
        }
    } else {
        out.innerHTML += num;
    }
}

function clearOut() {
    out.innerHTML = "";
}

function equal() {
    if (eval(out.innerHTML) === Infinity) {
        out.innerHTML = "it`s impossible";
        out.style.fontSize = 25 + "px";
    } else if (eval(out.innerHTML) === undefined) {
        out.innerHTML = "";
    } else out.innerHTML = eval(out.innerHTML);
}

function backSpace() {
    out.innerHTML = out.innerHTML.substr(0, out.innerHTML.length - 1);
}

// addEventListener("keydown", function(e) {
//     console.log(e);
//     if (e.key == 4) return insert("4");
//     else if (e.key == "Enter") equal();
// });