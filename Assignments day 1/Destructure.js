//JavaScript Destructuring Assignment
const fruits = ['Apple', 'Banana', 'Cherry'];

[applename, banananame, cherryname] = fruits;
console.log('First Fruit Name is '+applename);//printing the first fruit name in fruit object
console.log('Second Fruit Name is '+cherryname);//printing the second fruit name in fruit object

//destructure employee details
const user = {                                  //declaring the user object
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
    };
let {firstName:empfirstname,lastName,age,email}= user;//assigning user objects values into diffrent variables
//printing the variables into console
console.log('First Name of the employee is '+empfirstname);
console.log('Last Name of the employee is '+lastName);
console.log('Email ID of the employee is '+email);


//nested object destructuring
const user_details = {//declaring the user object
    firstName1: "John",
    lastName1: "Doe",
    age1: 30,
    email1: "john.doe@example.com",
    address:
    {street:"BTM Layout",//declaring the user object and nested object address
    city:"Bengaluru"}
    };

const{firstName1,lastName1,age1,email1,address:{street,city}}= user_details;//assigning user objects values into diffrent variables
//printing the variables into console
console.log('First Name of the employee is '+firstName1);
console.log('Last Name of the employee is '+lastName1);
console.log('Email ID of the employee is '+email1);
console.log('Street of the employee is '+street);
console.log('City of the employee is '+city);

//Destructuring in Function Parameters
function destructureobject(employee){               //declaing the function destructureobject
    const{firstName1,email1}=employee;              //assigning employee values to diffrent variable
    //printing variables
    console.log('First Name of the employee from function is'+firstName1);
    console.log('Email ID of the employee from function is'+email1)

}

destructureobject(user_details);                    //callig the function destructureobject