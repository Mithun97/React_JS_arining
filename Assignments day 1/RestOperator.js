//JavaScript Rest Parameters Assignment
function sumall(...input){
    let sum = 0;
    for(let i=1;i<=input.length;i++){
        sum += i;
    }
    return sum;
}
let p = sumall(1,2,3,4,5);
console.log(p);


function userInfo(firstName,lastName,...hobbies){
    let userdetails_new1 = {userfirstname:firstName,userlastname:lastName,userhobbies:hobbies}
    let userdetails_new = {name:firstName+' '+lastName,userhobbies:hobbies}

    console.log(userdetails_new);
    console.log(`User details:First Name is ${userdetails_new.userfirstname} and Last Name is ${userdetails_new.userlastname}.`);
    console.log(`User Hobbies are : ${userdetails_new.userhobbies}.`);
}
userInfo('Mithun','T S','Sports','Music');