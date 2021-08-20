// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var charAvail = "";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var pWord = "";

  // Prompt for length
  var pwLength = prompt("Choose password length (between 8 and 128)");
  

  // Validate input, repeat if invalid input, exit if nothing input or canceled
  if (!pwLength) {
    return;
  }

  while (pwLength < 8 || pwLength > 128) {
    alert("Input invalid. Enter a number between 8 and 128");
    pwLength = prompt("Choose password length (between 8 and 128");

    if (!pwLength) {
      return;
    }
  }

  // Ask about lower case
  var incLowerCase = confirm("Would you like to include lower case letters in your password?");
  if (incLowerCase) {
    charAvail += lowerCase;
  }

  // Ask about upper case
  var incUpperCase = confirm("Would you like to include upper case letters in your password?");
  if (incUpperCase) {
    charAvail += upperCase;
  }

  // Ask about numbers
  var incNumbers = confirm("Would you like to include numbers in your password?");
  if (incNumbers) {
    charAvail += numbers;
  }

  // Ask about symbols
  var incSymbols = confirm("Would you like to include symbols in your password?");
  if (incSymbols) {
    charAvail += symbols;
  }

  // Chooses a random index from the available character array and stores it in the password string.
  // Does this until the length of the password matches the length input
  for (i = 0; i < pwLength; i++) {
    var indexChoice = Math.floor(Math.random() * charAvail.length);
    pWord += charAvail[indexChoice];
  }

  return pWord;

};