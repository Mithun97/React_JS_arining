//JavaScript Spread Operator Assignment

let arry1 = {husband:'Virat',wife:'Anushka'};
let arry2 = {son:'Akaay',daughter:'Vamika'}

combinedarray1 = {...arry1,...arry2}
console.log('Array1 and Array2 combined');
console.log(combinedarray1);
combinedarray2 = {frd1:'ABD',...arry1,frd2:'Maxwell',...arry2,frd3:'Will Jacks'}
console.log('Array1 and Array2 combined and added new values in beginning,middel and end ');
console.log(combinedarray2);


let object1 = {name:'Mithun',initial:'T S',age:26};
let object2 = {city:'Tumkur',state:'Karnataa',name:'Ganesh'};
let comboobje = {...object1,...object2};
console.log('Combined object overlapping with object2 value');
console.log(comboobje);


function spreadsum(a,b,c,d){
    let sum = a+b+c+d;
    return sum;
}
const array1 = [4,5,6,7];
let sumAll = spreadsum(...array1);
console.log('Sum of the array '+sumAll);