//////////identify the largest number in given array////////

var a = [24, 53, 78, 91, 12];
var largest = 0;
document.write("Array items: " + [a]);
for (var i = 0; i < a.length; i++) {
    if (a[i] > largest) {
        largest = a[i];
    }
}
document.write("<br>" + "The Largest number is " + largest);