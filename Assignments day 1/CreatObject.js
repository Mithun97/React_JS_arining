//JavaScript Object Creation and Access Assignment
let student_details = {
    firstName :'Mithun',
    lastName  :'T S',
    class     :'Training',
    classname :'Introduction to ReactJS',
    teacher   :'Ajay Kumar',
    name      :'Ajay Kumar',
    email     :'ajay@metricstream.com',
    grades    :{'Maths':'A','Physics':'B','Biology':'C'}
}
console.log(student_details);
console.log('Student First Name '+student_details.firstName);
console.log('Student Class '+student_details['class']);
console.log('Student Email ID with dot notation '+student_details.email);
console.log('Student Email ID with bracket notation '+student_details['email']);
console.log('Before Updating Maths Grade '+student_details.grades.Maths);
student_details.grades.Maths='A+'
console.log('After Updating Maths Grade '+student_details.grades.Maths);