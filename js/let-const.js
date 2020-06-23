const score = 5; // Const is short for constant
score += 5; //  should not change, it should remain constant.
console.log(score); // output is error, because score is constant

let score2 =5;
score2 += 10;
console(score2); // works like var but you canot use the variable twice

let score3 =5;
score3 += 10;

var score3 =20;
console(score3); // output : 20 because var would let you overwrite the value in the initial assignment.
