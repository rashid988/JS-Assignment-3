///////////sort an array from smallest to largest value/////////




var A = [20,53,78,4,91,12];
//       i ,j
var B = [];

/* now sorting the elements of array A */

for (var i = 0; i < A.length; i++) {
    for (var j = i+1; j <= A.length; j++) {
        if (A[i] > A[j]) {
            
            B[i] = A[i];
            A[i] = A[j];
            A[j] = B[i];
        }
    }
}

document.write("<br>" + "Ascending order is: " + A + "</br>"); // smallest to largest number