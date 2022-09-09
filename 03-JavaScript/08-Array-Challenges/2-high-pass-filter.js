function highPass(arr, cutoff) {
    varfilteredArr =[];
    for (var i=0; i<arr.length; i++) {
        if (arr[i]>cutoff) {
            varfilteredArr.push(arr[i]);
        }
    }
    return varfilteredArr;
}
var result =highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]