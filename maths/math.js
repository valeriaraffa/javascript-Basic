const secsPerMin =60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek =7;
const weeksPerYear = 52;

const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;
console.log(`They are ${secondsPerDay} seconds in a day.`)

const yearsAlive = 26;
const secondsyearsAlive = yearsAlive * secondsPerDay
console.log(`I have been alive for more ${secondsyearsAlive} secodns.`);
