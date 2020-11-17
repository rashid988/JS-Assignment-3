/////removing duplicated items from an array/////


var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var uniqueArray = []; //create empty arry to store unique values
for (i = 0; i < arr1.length; i++ ) {
    if (uniqueArray.indexOf ( arr1[i] ) === -1){ // if any element of arr1 is already present then it will tells the index number otherwise it gives -1 which means that element is alredy present
        uniqueArray.push(arr1[i]);
    }
}

document.write(uniqueArray);