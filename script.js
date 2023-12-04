
// Question1 Create a function that checks if the input/parameter is an even number.

function isEven(number) {
  return number % 2 === 0;
}


let num = 10;
if (isEven(num)) {
  console.log(`${num} is an even number.`);
} else {
  console.log(`${num} is an odd number.`);
}


//Question2 Create a function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter

let n1 = 1
let n2 = 10

function myFunction(n1, n2){}
     for (let i = n1; i <= n2; i++)
     
     {console.log(i, 'values')}
     myFunction()


// Question3 Create a function that sum the values in-between two numbers. eg calcFunc(1,3) returns 6. ie. 1+2+3.


 function sumInBetween(start, end) {
   let sum = 0;

   for (let i = start + 1; i < end; i++) {
     sum += i;
   }

   return sum;
 }
 let startNum = 1;
 let endNum = 10;
 let result = sumInBetween(startNum, endNum);

 console.log(
   `The sum of values  in-between ${startNum} and ${endNum} is: ${result}`
 );
   
 