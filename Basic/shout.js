const stringToShout = prompt("What do you want to shout?"); 
const shout = stringToShout.toUpperCase(); // the text shout
const shoutMessage =`<h2>The message to shout is: ${shout}!!</h2>`; // template literal

document.querySelector('main').innerHTML = shoutMessage; // insert content, even HTML tags into a webpage.

console.log(shoutMessage);

/**
 *  Shout App
 * a more conventional way of displaying information on a webpage is...
 * 
 * ... querySelector
 * insert content, even HTML tags into a webpage
 * to access HTML elements
 * 
 * querySelector is a method of
 * a built-in object the browser has called document.
 * And it's what's going to let us interact with the browser to find the HTML elements
 * we want to access.
 */