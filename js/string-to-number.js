const HTMLBadges = prompt('How many HTML badges do you have?');
const CSSBadges = prompt('How many CSS badges do you have?');
// prompt method returns what the user types as a string

const totalBadges = HTMLBadges+CSSBadges;
console.log(typeof totalBadges, typeof CSSBadges);// output: strings
