////declaration and intialization of an array/////

var qualifications = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD" ];

document.write("<h1>" + "Qualifications" + "</h1>" + "<br>");

for ( var i = 0; i < qualifications.length; i++ ){
    document.write(  "<br>" + (i+1) + ")" + qualifications[i] );
}