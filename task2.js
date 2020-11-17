//////displaying score & percentange of students//////


var students = [];
var score    = [];

for (i=0; i<3; i++){
  students[i] = prompt("What is the name of Student?");
  score[i]    = prompt("What is the score of Student?");

}

for (i=0; i<students.length; i++){
    document.write("<br>" + "Score of " + students[i] + " is "  + score[i] + ". Percentage: " + (score[i]/5) + "%" + "</br>" );
}
