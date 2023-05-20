// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var passwordLength = parseInt(prompt("Enter a number between 8 and 128"));
    console.log(passwordLength);
    if(passwordLength < 8 || passwordLength > 128){
        alert("Enter a valid number between 8 and 128");
        return generatePassword();
    }
    
    var charset = "";
    if (window.confirm("Would you prefer to use capital letters?")) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (window.confirm("Would you prefer to use lowercase letters?")) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (window.confirm("Would you prefer to use numbers?")) {
        charset += "0123456789";
    }
    if (window.confirm("Would you prefer to use special characters?")) {
        charset += "!@#$%^&*_-+=";
    }
    if (charset == ""){
        alert("Please select at least one character type.");
        return generatePassword();
    }
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * charset.length);
        password += charset.substring(randomNumber, randomNumber +1);
      }
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * charset.length);
        password += charset.substring(randomNumber, randomNumber +1);
        }
    return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordTextArea = document.querySelector("#password");

  passwordTextArea.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
