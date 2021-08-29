// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable name and we set it to 'Dane' as a string.
// Next we run a conditional to see if name is an exact match to 'Mary' if it is we log 'Hi, Mary!' otherwise we log 'How do you do?'
// in this case the name is not Mary so we log 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable secret but don't assign a value yet
// We make a variable code and assign it a number 123 as a number variable
// We run a conditional to see if code is an exact match to 123 if it is than the global variable secret is 'super' and code is now code *=
// We then run a code to see if the code is less than 250 which it is so secret now is 'duper'
// We then log 'Secret' which should appear as 'duper'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable called isStudent and set to a value true, making it a boolean
// We make a variable called age and set it to a number of 34
// We make a variable called zip and set it to a number 55407
// We run a compound conditional that says if isStudent is true and zip is more than 80000 then the console should log 'You're a student on the West Coast!'
// zip  is not more than 80000 so we go to the next compound conditional which reads if isStudent is false or age is less than 30 log 'What are your hobbies?'
// age is not less than 30 so we go to the next conditional which reads if isStudent is true log 'Welcome to Prime!' which would be the one to run
// the last else is just in case the others don't work

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
FIX let colorOne = 'red'; Should be set to blue
FIX let colorTwo = 'blue'; Should be set to red
let mix = true;

if (mix === true) {
FIX  colorOne = 'purple'; mix should equal purple
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
FIX const time = 4; time should be a variable (let time = 4)

FIX if (temp > 39 || time >= 4) {  We should be using '&&' instead of '||'
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
FIX const minAge = 21; minAge should be a variable (let minAge = 21)

if(minAge <= age) {
FIX  console.log('no entry'); should log 'Enter'
FIX } else { Not included in text
 console.log('enter');
}
*/
