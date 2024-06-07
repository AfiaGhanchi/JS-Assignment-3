//---------------------------------------------------------------//
//--------------Student Marksheet----------------//
//---------------------------------------------------------------//



// Define marks for each subject
var mathematics = 85;
var computerScience = 95;
var english = 75;

// Calculate total marks
var totalMarks = mathematics + english + computerScience;

// Calculate percentage
var totalSubjects = 3;
var percentage = (totalMarks / (totalSubjects * 100)) * 100;

// Assign grade
let grade = "Fail";
if (percentage >= 80) {
    grade = "A+";
} else if (percentage >= 70) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 50) {
    grade = "C";
}

// Display marksheet
console.log("---------------------");
console.log("--Student Marksheet--");
console.log("---------------------");
console.log("Mathematics:" + mathematics);
console.log("English:" + english);
console.log("Computer Science:" + computerScience);
console.log("---------------------");
console.log("Total Marks:" + totalMarks);
console.log("Percentage is :" + percentage + "%");
console.log("Your Grade is:" + grade);
console.log("Congratulation! your percentage is " + percentage + " and your grade is " + grade + " 🎉🎊");





// Define marks for each subject
var maths = 5;
var sci = 05;
var eng = 25;

// Calculate total marks
var total = maths + eng + sci;

// Calculate percentage
var totalSubjects = 3;
var percent = (total / (totalSubjects * 100)) * 100;

// Check if the student passed or failed
var status = "";
if (percent < 50) {
    status = "Fail";
} else {
    // Assign grade
    if (percent >= 80) {
        status = "A+";
    } else if (percent >= 70) {
        status = "A";
    } else if (percent >= 60) {
        status = "B";
    } else if (percent >= 50) {
        status = "C";
    }
}

// Display report card
console.log("--------------------------------------------------");
console.log("Student Report Card");
console.log("--------------------------------------------------");
console.log("Subject         |   Marks");
console.log("--------------------------------------------------");
console.log("Mathematics     |   " + maths);
console.log("English         |   " + eng);
console.log("Science         |   " + sci);
console.log("--------------------------------------------------");
console.log("Total Marks     |   " + total);
console.log("Percentage      |   " + percent.toFixed(2) + "%");
console.log("Congratulations! Your percentage is " + percent.toFixed(2) + " and your grade is " + status + " 🎉🎊👏");






