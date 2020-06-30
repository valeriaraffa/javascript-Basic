const HTMLBadges = prompt('How many HTML badges do you have?');
const CSSBadges = prompt('How many CSS badges do you have?');
// prompt method returns, what the user types as, a string

const totalBadges = parseInt(HTMLBadges)+parseInt(CSSBadges);
const totalBadges2 = +HTMLBadges + +CSSBadges;
console.log(typeof totalBadges,totalBadges);
console.log(typeof parseInt(HTMLBadges),HTMLBadges, typeof parseInt(CSSBadges), CSSBadges);

const pi = '3.14';
console.log(typeof parseFloat(pi));
console.log(typeof +pi, pi);

const pi2 = prompt('What is Pi?');
console.log(+pi2 ===3.14);
/**
 * unary plus +
 * 
 * other way to convert strings to a number.
 * works with integer and fload numbers but its beter to use 
 * the parseFloat methods, because they clearly explain their purpose
 * 
 */

 /**
  * Also, parseInt, parseFloat, and the unary plus operator 
  * can help you when making comparisons and working with 
  * conditional statements.
  */

