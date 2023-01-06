
// var book = {
//     title: "The lady with Camellias",
//     author: `Alexandre Dumas`,
//     publishDate: 1848,
//     characters: [`Margaret`, `Alex`, `Anna`],
//      camelliasFlowers: {
//        color: `white`,

//      }
// }

// console.log(book);


// var paragraph2 = document.createElement (`p`);
// paragraph2.innerText = `Hello Everyone`;
// paragraph2.style.fontSize = `18px`;
// paragraph2.style.fontFamily = `sans-serif`;
// paragraph2.style.border = `1px solid orange`;
// paragraph2.style.padding = `30px`;

// paragraph2.addEventListener ('mouseenter', function (event) {
//     event.target.style.color = `yelow`;
// })

// var a;
// var b = 2;
// console.log(a)
// a = 7;


// b = a;

// console.log(a);

// const user = prompt(
//   `Input a uppercase letter, a lowercase letter or a number.`
// );

// if (user === user.toUpperCase() && user !== user.toLowerCase()) {
//   console.log(`${user} is an uppercase letter.`);
// } else if(user === user.toLowerCase() && user !== user.toUpperCase()) {
//   console.log(`${user} is an lowercase letter.`); 
// } else if(!Number.isInteger(user) && !isNaN(user)) {
//   console.log(`${user} is a number.`);
// } else {
//   console.log(`${user} is not a letter or number.`)
// }

// numar par = "fizz"
// numar impar = 'buz'
// de la 0 pana la 10
// for(let i = 0; i <= 10; i++){
//   if( i % 2 === 0){
//     console.log(`${i} fizz`)    
//   } else if( i % 2 === 1){
//     console.log(`${i} buzz`)
//   } else{
//     console.log("fizz buzz")
//   }
// }


// const userConvertFrom = prompt(
//   "In wich metric are you converting? \nC-Celsius \nF-Fahrenheit \nK-Kelvin"
// )

// const tempToConvert = prompt("add temperature to convert?")
// const userConvertTo = prompt("To which metric would you like to convert the temperature? \nC-Celsius \nF-Fahrenheit \nK-Kelvin")

// // from C to F
// if(userConvertFrom === "C" && userConvertTo==="F"){
//   let fahrenheit = (tempToConvert * 9) / 5 + 32
//   console.log(`${tempToConvert} is ${fahrenheit}`)
//   // from C to K
// } else if(userConvertFrom==="C" && userConvertTo==="K"){
//   let kelvin = (tempToConvert + 273.15)
//   console.log(`${tempToConvert} is ${kelvin}`)
//   // from F to C
// } else if(userConvertFrom==="F" && userConvertTo==="C"){
//   let celsius = ((tempToConvert - 32) * 5) / 9;
//   console.log(`${tempToConvert} is ${celsius}`)
//   //from F to K
// } else if(userConvertFrom==="F" && userConvertTo==="K"){
//   let kelvin = ((tempToConvert -32) * 5) / 9 + 273.15;
//   console.log(`${tempToConvert} is ${kelvin}`)
// }
// let sum1 = 0
// let i = 2
// while (sum1 <= 20) {
//   console.log(sum1, 'sum');
//   sum1 += i
//   i += 2
//   i=i+2
//   2
// }



// const word = prompt("Enter a word");
// let isPalindrome = true


// let i = 0; 
// let j = word.length-1
// while (i < j) {
//   if( word[i] !== word[j]){
//     isPalindrome = false
//     console.log(false)
//   }
//   i++ 
//   j--
// }

// if( isPalindrome){
//   console.log(`${word} is palindrome`)
// } else{
//   console.log(`${word} is not a palindrome`)
// }

// let sum = 0;
// let count = 0;

// while(true) {
//   let userInput = Number(prompt("Enter a number (-1 to exit):"))
//   if(userInput === -1) {
//     break;
//   }
//   sum += userInput
//   count++
// }

// let average = sum / count
// console.log(`suma average este: ${average}`)

// let boolean = true;

// do {
//   const userInput = prompt("What color is the sky? \n a. Purple \n b. Pink \n c. Blue \n d. Yellow")
//   if(userInput === "c"){
//     console.log("That' correct")
//     break
//   } else {
//     let userAskAgain = prompt(
//       "That's incorrect! Would you like to try again? y/n" 
//     )

//     if(userAskAgain === "n"){
//       console.log("That's wrong")
//       // boolean = false;
//     }
//   }
// } while(boolean) 


// Define a function that adds two numbers
const add = (a, b) => a + b;

// Define a function that subtracts two numbers
const subtract = (a, b) => a - b;

// Define a function that multiplies two numbers
const multiply = (a, b) => a * b;

// Define a function that divides two numbers
const divide = (a, b) => a / b;

// Prompt the user for the first number
const num1 = Number(prompt("Enter the first number:"));

// Prompt the user for the second number
const num2 = Number(prompt("Enter the second number:"));

// Prompt the user for the operation they want to perform
const operation = prompt(
  "Enter the operation you want to perform (add, subtract, multiply, or divide):"
);

// Initialize a result variable to 0
let result = 0;

// Perform the appropriate operation based on the user's input
if (operation === "add") {
  result = add(num1, num2);
} else if (operation === "subtract") {
  result = subtract(num1, num2);
} else if (operation === "multiply") {
  result = multiply(num1, num2);
} else if (operation === "divide") {
  result = divide(num1, num2);
}

// Log the result to the console
console.log(result);