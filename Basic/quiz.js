/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let score = 0;

// 2. Store the rank of a player
 let rank;

// 3. Select the <main> HTML element
const htmlElementmain = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const question1 = "Place where Disneyworld is."; //orlando
const question2 = "Place where Busch Gardens is"; // Tampa
const question3 = "Country with Manatee River"; // Manatee
const question4 = "Place where Univ of FL is "; // Gainesville
const question5 = "Largest City in FL"; // Miami
const question6 = "Name a programming language thats also a gem"; //Ruby
const question7 = "Name a programming language thats also a snake"; // Phyton
const question8 = "What language do you use to style a web pages?"; //CSS
const question9 = "what language do you use to build the structure of a web pages?"; // html
const question10 = "What language do you use to add interactivity to a web psge?"; // javascript

  const answer1 = prompt(question1);
  if (answer1.toLowerCase() === "orlando" || "paris" || "la" ){
        score += 1;
        alert(`Your Scoure ${score}`);
  } 

  const answer2 = prompt(question2);
  if (answer2.toLowerCase() === "tampa" ){
        score += 1;
        alert(`Your Scoure ${score}`);
  } 
  const answer3 = prompt(question3);
  if (answer3.toLowerCase() === "manatee" ){
        score += 1;
        alert(`Your Scoure ${score}`);
  } 
  const answer4 = prompt(question4);
  if (answer4.toLowerCase() === "gainesville" ){
        score += 1;
        alert(`Your Scoure ${score}`);
  } 
  const answer5 = prompt(question5);
  if (answer5.toLowerCase() === "miami" ){
        score += 1;
        alert(`Your Scoure ${score}`);
  } 

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if ( score > 5){
    alert("Gold");
    rank = "Gold";
} else if (score >= 3 ){
    alert("Silver");
    rank = "Silver";
} else if( score >= 2) {
    alert("Brown");
    rank = "Brown";
} else {
    alert("Try again");
    rank = "none";
}

// 6. Output results to the <main> element
htmlElementmain.innerHTML = `
<h2> you got ${score} out of 10 questions correct.</h2>
<p> Crown earned: <strong>${rank}</strong>
`;
