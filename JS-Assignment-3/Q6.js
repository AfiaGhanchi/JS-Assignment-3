// Ques no 6
var student = "Student Name: Afia Noor"
document.write(student +"<br>");
var marks = "Mark-Sheet";
document.write(marks +"<br>");
var subject = "Subjects";
document.write(subject +"<br>");
var english = "English:80";
document.write(english +"<br>");
var urdu = "Urdu:75";
document.write(urdu +"<br>");
var math = "Math:95";
document.write(math +"<br>");
var science = "Science:78";
document.write(science +"<br>");
var islamiat = "Islamiat:86";
document.write(islamiat +"<br>");
var pst = "PST:70";
document.write(pst +"<br>");
var art = "Art:90";
document.write(art +"<br>");
var totalMarks = "Total-marks:700";

var totalMarks = 700;
var english1 = 80;
var urdu1 = 75;
var math1 = 95;
var science1 = 78;
var islamiyat1 = 86;
var pst1 = 70;
var art1 = 90;
var marks1 = english1 + urdu1 + math1 + science1 + islamiyat1 + pst1 + art1;
document.write(`Total marks: ${totalMarks}` +"<br>");
document.write(`Your marks: ${marks1}` +"<br>");
var result = marks1 / totalMarks * 100;
document.write(`Percentage ${result} %` +"<br>" +"<br>")
var grade;
if (result >= 90) {
    grade = "A+";
}
else if (result >= 80) {
    grade = "A";
}
else if (result >= 70) {
    grade = "B"
}
else if (result >= 60) {
    grade = "C"
} else if (result >= 50) {
    grade = "Fail"
}
document.write(`Congratulations, ${student} your percentage is,  ${result}%  your Grade is 🥳🎖️🎊🎉 ${grade}`);