// Predict the output with logic/explanation.
 
function sayHi() {
  console.log(name);    //  undefine
  console.log(age);     // referenceError: trying to access before initialization
  var name = 'Aayush';
  let age = 31;
}

sayHi(); 

 
 
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);   //  1,2,4
}

 
 
let number = 0;
console.log(number++);  //0
console.log(++number);  //2
console.log(number);    //2
 
 
function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi()); //number
 
 
function getAge(...args) {
  console.log(typeof args);  // object
}

getAge(31);
 
// -> This kind of question can appear in an interview.
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456
