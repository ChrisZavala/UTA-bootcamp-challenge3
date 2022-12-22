// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // var upper = ["A", "B"]
  // bunch of arrays
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "+", "_", "=",];
//how to decide how many elements to choose from each array
var resultArray = [];

var userArray = [];

//confirm prompt do you want to include lowercase, uppercase, numeric and/or special chars (4 confirm prompts)
//Here I am going to put all my prompts to ask the user for the conditions fo the password generation. 

upperCaseArray [1];

// prompt user to choose num between 8 and 128
//validate user num

var numberChar = window.prompt("Choose a length of at least 8 characters and no more than 128");

// 4 vars to save T/F to included character
// validate that at least one category was chosen
var lowerCase = window.confirm("You confirm you want Lowercase letters in your password?");
var upperCase = window.confirm("You confirm you want Uppercase letters in your password?");
var numeric = window.confirm("You confirm you want numbers in your password");
var specialChar = window.confirm("You confirm you want special characters in your password?");





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}
console.log(password);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





