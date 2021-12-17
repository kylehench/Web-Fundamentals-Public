function acceptCookies() {
    document.querySelector("#cookie-container").remove();
}
var celsius = true;
var tempsC = [[24,18],[27,19],[21,16],[26,21]];
var tempsF = [[75,65],[80,66],[69,61],[78,70]];
var els = document.getElementsByClassName("day");
function tempConvert(value) {
    temps = []
    if (value.slice(-1) === "F") {
        temps = tempsF;
    }
    else {
        temps = tempsC;
    }
    for (i=0; i < els.length; i++) {
        els[i].querySelector(".high").innerHTML = temps[i][0] + "&deg;";
        els[i].querySelector(".low").innerHTML = temps[i][1] + "&deg;";
        // console.log(els[i].querySelector(".high").innerText)
    }
}