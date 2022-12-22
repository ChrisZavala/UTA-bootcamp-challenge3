//must return a string value that is the password. 
  // prompt user to choose num between 8 and 128
    //validate user num
    //confirm prompt do you want to include lowercase, uppercase, numeric and/or special chars (4 confirm prompts)
    // 4 vars to save T/F to included character
    // Vars that include all user options of each category. Array of strings for eat category. 
    // var upper = ["A", "B"]
    
    //if my user yes to include category choose random(Math.random) elements from the array
    //how to decide how many elements to choose from each array
    // validate that at least one category was chosen
    //join chosen elements into a string 
    //at least one for loop
    //lots of IF statements. 
    // Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // var upper = ["A", "B"]
  // bunch of arrays
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "+", "_", "=",];

var resultArray = [];

var userArray = [];

  
  return passwordString;


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





