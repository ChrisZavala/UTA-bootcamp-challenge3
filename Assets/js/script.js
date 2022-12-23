// Assignment Code
var generateBtn = document.querySelector("#generate");
//function to Generate Password
function generatePassword() {

var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "{", "|", "}", "~"];
//how to decide how many elements to choose from each array
var resultArray = [];
var userArray = [];

//confirm prompt do you want to include lowercase, uppercase, numeric and/or special chars (4 confirm prompts)

upperCaseArray [1];
// prompt user to choose num between 8 and 128
var numberChar = window.prompt("Choose a length of at least 8 characters and no more than 128");
//Monkey test error correction 
if (numberChar < 8 || numberChar > 128 || Number.isNaN (numberChar)){
  alert("Must be a number between 8 and 128!");
  return generatePassword();
}

// 4 vars to save T/F to included character, the boolean choice of true/false is why .confirm is being used. 
// validate that at least one category was chosen
//Here I am going to put all my prompts to ask the user for the conditions fo the password generation. 

var upperCase = window.confirm("You confirm you want Uppercase letters in your password?");
var lowerCase = window.confirm("You confirm you want Lowercase letters in your password?");
var numeric = window.confirm("You confirm you want numbers in your password");
var specialChar = window.confirm("You confirm you want special characters in your password?");
//Don't need this below because I used a boolean way to prompt the user but this error correction would be valid if I used prompts
if (!upperCase && !lowerCase && !numeric && !specialChar) {
  alert("Must pick at least one type of character");
  return generatePassword();
}
//first if loop for the results array
// the resutArray here is being created in this loop if the user is selecting each option. 
// Inside the if statement for each resultsArray I used a method to push at least on value of each num,upper,lower, and special if they are selected
    if (numeric) {
      resultArray = resultArray.concat(numberArray);
        userArray.push(numberArray[Math.floor(Math.random() * numberArray.length)]);

    }

    if (upperCase) {
      resultArray = resultArray.concat(upperCaseArray);
        userArray.push(upperCaseArray[Math.floor(Math.random() * upperCaseArray.length)]);

    }

    if (lowerCase) {
      resultArray = resultArray.concat(lowerCaseArray);
        userArray.push(lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)]);

    }

    if (specialChar) {
      resultArray = resultArray.concat(specialCharArray);
        userArray.push(specialCharArray[Math.floor(Math.random() * specialCharArray.length)]);

    }
    //here we can see the resultArray. The selction of the entire characters in the array. 
    console.log(resultArray);
    //at least one for loop
    //if my user yes to include category choose random(Math.random) elements from the array
    // Here the array from above the resultArray is getting randomized and pulling all the elements from the array i.e Array of 87 position of the array. 
    // Here in this part I subtracted one array value for the above when I guarented one spot of num,upper,lower,special and take away one. 
    var remaining = numberChar - userArray.length;
    console.log(userArray);
    for (var i = 0; i < remaining; i++) {
      //added a push, this is appends new elements to the end of an array, and returns the new length of the array. 
      userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 

    }
    return userArray.join("");
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







