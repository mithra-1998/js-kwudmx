// Variables and Functions:


//adds two numbers and returns the value
function add(n1, n2) {
  return n1+n2;
}

const result = add(3,4) //Output : 7
console.log(result)

//------------------------------------------------------------------

//subtracts two numbers and returns the absolute difference
function sub(n1,n2) {
  return Math.abs(n1-n2);
}

const result = sub(3,4)
console.log(result) //Output : 1

//------------------------------------------------------------------

//Multiplies two numbers and displays the value
function mul(n1, n2) {
  return n1*n2;
}

const result = mul(3,4) //Output : 12
console.log(result)

//------------------------------------------------------------------

//Divides two numbers and returns the values 
function div(n1, n2) {
  return n1/n2;
}

const result = div(3,4) //Output : 0.75
const result = div(4,3) //Output : 1.3333333333333333
console.log(result)

//------------------------------------------------------------------

//Gets the remainder value when a number is divided by a divisor
function mod(n1, n2) {
  return n1%n2;
}

const result = mod(10,2) //Output : 0
const result = mod(11%2) //Output : null / NaN
console.log(result)

//------------------------------------------------------------------

//Multiplies two numbers and displays the value
function powerFun(n1, n2) {
  return Math.pow(n1,n2);
}

const result = powerFun(3,4) //Output : 81
const result = powerFun(-3,3) //Output : -27
console.log(result)

//------------------------------------------------------------------
//Compares two strings
function compareString(str1, str2) {
  return(str1 === str2)
}

const str1 = 'Helli' 
const str2 = 'Hello' 
console.log(compareString(str1,str2)) //Output : false

//------------------------------------------------------------------

//Compares two numbers
compareNumber = (n1, n2) => {
  return(n1 === n2)
}

console.log(compareNumber(2,2)) //Output : true
console.log(compareNumber(2,-2)) //Output : false

//------------------------------------------------------------------


//Compares two values
compareValues = (n1, n2) => {
  return (typeof(n1) === typeof(n2) && n1 === n2)
}

console.log(compareValues(2,2)) //Output : true
console.log(compareValues(2,-2)) //Output : false
console.log(compareValues(2,'two')) //Output : false
console.log(compareValues('two','two')) //Output : true

//------------------------------------------------------------------


//Grade Calculator
getGrades = (gradeData) => {
if (gradeData >= 90) {return 'A';}
if (gradeData >= 80) {return 'B';}
if (gradeData >= 70) {return 'C';}
if (gradeData >= 60) {return 'D';}
return 'F';
}

console.log(getGrades(70)) //Output : C
console.log(getGrades(90)) //Output : Add


//------------------------------------------------------------------

//check Vowels in the given string 

  const arr = ['a','e','i','o','u']
  checkVowel = (str, vowel) => {
    var value = 0;
    vowel.forEach(function(word){
      value = value + str.includes(word);
    });
    return (value === 1)
}

console.log(checkVowel('f',arr)) //false
console.log(checkVowel('o',arr)) //true

//------------------------------------------------------------------


//check if a number is prime 

checkPrime = (n) => {
  if(n === 1)
  return false;
  else if(n === 2)
  return true;
  else {
    for(let i = 2; i <= Math.sqrt(n); i++)
    if(n%i === 0)
    return false;
  }
  return true;
}

console.log(checkPrime(81)) //Output : false
console.log(checkPrime(3)) //Output : true
  











// 1. Add, subtract, Multiplication, division, module, power, compare string, compare number, compare values.

// 2. gradeFinder, check vowels, find prime number