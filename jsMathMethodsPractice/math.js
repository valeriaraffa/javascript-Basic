// 1. Attach this file -- math.js -- to the index.html file using a <script> tag

// 2. Add an alert to announce the program with a message like "Let's do some math!"
alert("Let's do some math!");
// 3. Create a variable and use the prompt() method to collect a number from a visitor
let num1 = prompt("Please type a number");
// 4. Convert that value from a string to a floating point number
num1 = parseFloat(num1);
console.log(typeof num1, num1);
// 5. Repeat steps 3 and 4 to create a second variable and collect a second number
let num2 = prompt("Please type another number");
num2 = parseFloat(num2);
console.log(typeof num2, num2);
// 6. Create a new variable -- message -- which you'll use to build
//    a complete message to print to the document
//    Start by creating a string that includes <h1> tags as well
//    and the two input numbers. The string should look something like this:
//    "<h1>Math  with the numbers 3 and 4</h1>" where the two numbers are
//    the values input from the user. Use string concatenation to create this
//    and make sure you actually perform the math on the values by 
//    using the + symbol to add their values together
var message = `<h1>Math with the numbers ${num1} and ${num2}</h1>`;
// 7. Add another string to the message variable. 
//    The string should look something like this after concatenation:
//    "3 + 4 = 7"
message += (`${num1}+${num2} = ${num1+num2}`);
/** antoher solution without a variable "message":
 * document.querySelector('html').innerHTML =
`<h1>Math with the numbers ${num1} and ${num2}</h1>
                ${num1}+${num2} = ${num1+num2}<br>
                ${num1}*${num2} = ${num1*num2}<br>
                ${num1}/${num2} = ${num1/num2}<br>
                ${num1}-${num2} = ${num1-num2}<br>`;
    
                */
// 8. Add a linebreak tag -- <br> -- to the message variable
message+='<br>';
// 9. Continue to add to the message variable to include strings
//    demonstrating multiplication, division and subtraction
//    For example:
//    "3 * 4 = 12"
//    "3 / 4 = 0.75"
//    "3 - 4 = -1"
message += (`
            ${num1}*${num2} = ${num1*num2}<br>
            ${num1}/${num2} = ${num1/num2}<br>
            ${num1}-${num2} = ${num1-num2}<br>
            `);
// 10. Use the document.write() method to print the message variable 
//     to the web page. Open the finished.png file in this workspace
//     to see what the completed output should look like
document.write(message);











