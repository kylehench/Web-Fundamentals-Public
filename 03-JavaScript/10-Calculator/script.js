var currentArg = "";
var pastArg = "";
var OP = "";
var displayDIV = document.querySelector("#display");

function press(number) {
    currentArg += number.toString();
    displayDIV.innerHTML = currentArg;
}
function clr() {
    currentArg = "";
    pastArg = "";
    displayDIV.innerHTML = "0";
}
function setOP(operator) {
    OP = operator;
    pastArg = currentArg;
    currentArg = ""
}
function calculate() {
    currentArg = eval(pastArg + OP + currentArg).toString();
    displayDIV.innerHTML = currentArg;
}