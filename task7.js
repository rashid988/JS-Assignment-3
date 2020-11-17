///////compute the union of two arrays/////////



//method 1
var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
var newArray = [...new Set([...b, ...a])];
document.write(newArray);







//method 2
var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
var c = [].concat(b, a);
var newArr = [];

for (var i = 0; i < c.length; i++) {
    if (newArr.indexOf( c[i] ) === -1) {
        newArr.push( c[i] );
    }
}
document.write(newArr);
