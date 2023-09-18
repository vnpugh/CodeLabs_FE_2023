// Exercise #8
// Create a class Student with properties name and grades. 
// Implement methods to add grades and compute the average. 
// How does the this keyword behave differently in arrow functions compared to regular functions?

class Student {
    constructor(name, subject, firstExam, secondExam, thirdExam, avgGrade) {
        this.name = name;
        this.subject = subject;
        this.firstExam = firstExam;
        this.secondExam = secondExam;
        this.thirdExam = thirdExam;
        this.avgGrade = avgGrade;
    }
}