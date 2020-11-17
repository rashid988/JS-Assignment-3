//////search by user input in an array////////


A = ["cake", "apple pie", "cookie", "chips", "patties" ];

var input = prompt( "Welcome to ABC Bakery. What do you want to order sir/ma'am? ");


var found = false;

for (var i=0; i<A.length; i++){
    if (A[i] === input){
        document.write(input + " is available at index " + i + " in our bakery");
        found = true;
        break;
    }
}

if (!found){
    document.write("We are sorry "+ input + " is not available in our bakery");
}
