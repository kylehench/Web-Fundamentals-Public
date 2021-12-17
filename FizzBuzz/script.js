for (var i = 1; i <= 100; i++) {
    var stringOutput = "";
    if (i % 3 === 0) {
        stringOutput += "Fizz";
    }
    if (i % 5 === 0) {
        stringOutput += "Buzz";
    }
    if (stringOutput.length === 0) {
        console.log(i);
    } else {
        console.log(stringOutput);
    }
}