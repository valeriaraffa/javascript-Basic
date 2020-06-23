const message = " I'm Hello";
const escapeMsgCharacter ='I\'m a programmer' // escape character
const htmlSnippet = '<h1 class="headline">My Headline</h1>'
const multiline = " Hello, students. \
welcome to JavaScript Basics. \
I hope you learn a lot";
console.log(multiline);
/** JavaScript engine evaluates each line ere separately.
 * 
 * (So according to the JavaScript engine the first quote starts a string,
 * but it doesnt have a closing quote mark.
 * The second line is not wrapping in quotes at all
 * The third line is missing the first quptation mark.)
 * 
 * So if you wanna write a string on multiple lines,
 * you need to escape any new line characters with a backslash.
 * 
 * Adding a backslash at the end of each line tells the JavaScript engine that,
 * the string should continue to the next line.
 */