/**
 * AND Operator &&
 * create a single boolean value true or false
 * if one condition is false, the entire condition evaluates to fales.
 */
let age = 25; 
(20<age && age <30) // true

let age = 35; 
(20<age && age <30) // false

let age = 10; 
(20<age && age <30) // false

/**
 * Logical Or || (two pipe characters)
 * if condition 1 is true or condition 2 is true
 */
let agree ='yes';
(agree ==='yes' || agree === 'y') // true

let agree ='y';
(agree ==='yes' || agree === 'y') // true

let agree ='n';
(agree ==='yes' || agree === 'y') // false