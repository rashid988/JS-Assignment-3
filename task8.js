////////generating different series/////////


// a)counting
document.write("<br>" + "Counting: " );
for (var i=1 ; i<=15; i++){
    document.write(i);
    if (i<15)
    document.write(", ");
}

document.write("<br>" + "</br>");


// b)Reverse counting
document.write("<br>" + "Reverse Counting: " );
for (var i=10; i>=1; i-- ){
    document.write(i);
    {
        if(i > 1)
        document.write(", ");
    }
}

document.write("<br>" + "</br>");

// c)Even
document.write("<br>" + "Even: " );
for (var i = 0; i <= 20; i+=2) {
    document.write(i);

    if(i < 20) {
        document.write(", ");
    }

}

document.write("<br>" + "</br>");

// d)Odd
document.write("<br>" + "Odd: " );
for (var i = 1; i <= 19; i+=2) {
    document.write(i);

    if(i < 19) {
        document.write(", ");
    }

}

document.write("<br>" + "</br>");

// e)Series
document.write("<br>" + "Series: " );
for (var i = 0; i <= 20; i+=2) {
    document.write(i);

    if(i <= 20) {
        document.write("k");
    }

    if(i < 20) {
        document.write(", ");
    }

}