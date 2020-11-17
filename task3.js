//////diffrent arrays functions///////

var colors = [ "red", "green", "blue"];
document.write("<br>" + colors + "</br>" );

//A
colors.unshift( prompt(" Add color to the begining: " ) ); //add color to the begning
document.write("<br>" + colors + "</br>" );



//B
colors.push( prompt("Add color to the end: ") ); //add color to the end
document.write("<br>" + colors + "</br>" );

//C
colors.unshift("black" , "white"  );
document.write("<br>" + colors + "</br>"); //adds two  colors to the begning

//D
colors.shift();
document.write("<br>" + colors + "</br>" ); //delete first color 

//E
colors.pop();
document.write("<br>" + colors + "</br>"); //delete last color

//F
var colorInput = prompt("What  color do you want to add?");
var index      = prompt(" At which index do you want to add  the color?");
color.splice(index, 0 , colorInput);    //adding color to the user desired index 
document.write("<br>" + colors + "</br>");

//G
var position   = prompt("At which index do you want to delete color(s) ?");
var noOfColors = prompt("How many colors do you want to delete?");   //removing colors from user-defiend postion
colors.splice(position, noOfColors);
document.write("<br>" + colors + "</br>");












