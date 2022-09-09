function reverse(arr) {
    var arrReverse = [];
    for (var i = arr.length-1; i>=0; i--) {
        arrReverse.push(arr[i]);
    }
    return arrReverse;
}
   
var result =reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]