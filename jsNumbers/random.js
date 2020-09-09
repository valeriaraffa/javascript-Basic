//Return a value between 0 and 5
// Retrun a value from 0 and 5
console.log(Math.floor(Math.random() *6 ));
// Retrun a value from 0 to 1 but not including 1
console.log(`ramdom a ${Math.random()}.`);
// floor Rundet ab 
console.log(`floor with random a ${Math.floor(Math.random())}.`);
// ceil Rundet auf 
console.log(`ceil with random a ${Math.ceil(Math.random())}.`);
// Return a value between 1 and 6
const dieRoll = Math.floor(Math.random() *6 )+1;
console.log(`You rolled a ${dieRoll}.`);
console.log( Math.round( 3.9 ) );
/**Random Challenge */
// Collect input from a user
const inputHigh = prompt("Please provide your high number");
const inputLow = prompt("Please provide your low number");
// Convert the input to a number
const highNumber = parseInt(inputHigh);
const lowNumber = parseInt(inputLow);

if(highNumber && lowNumber) {
    // Use Math.random() and the user's number to generate a random number
const randomNumber = Math.floor(Math.random()*(highNumber-lowNumber+1))+lowNumber;
// Create a message displaying the random number
console.log(`${randomNumber} is a random number between ${lowNumber} and ${highNumber}`)
}else {
    console.log('You need to provide two numbers. Try again')
}
console.log( parseInt( '5 jj jj FTE' ) );