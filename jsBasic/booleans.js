let correctGuess = false;
const number = 6;
const guess = prompt('Guess a number between 1 and 10');

if ( +guess === number){
    correctGuess = true;
}
/**
 * PROBLEM: guess is a string not a number.
 * Solution: UNARY PLUS -> converting strings to numbers
 * unary plus operator just befor the guest variable
 * no space between plus and the variable
 * 
 * ensures that we are comparing two number values
 */
if(correctGuess === true ) {
    console.log('You guessed the number');
} else {
    console.log(`Sorry. The number was ${number}`);

}