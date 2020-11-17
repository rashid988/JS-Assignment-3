/////////printing pyramid pattern//////////
var rows =7;
var input =prompt("enter the sign for priting pattern?");

for (i=1; i<=rows; i++)
 {
    for (k=1; k<=(rows-i); k++)
    {

        document.write("&nbsp;");
    }

    for (j=1; j<=i; j++){

        document.write(input);
    }

    document.write("<br>");
}
