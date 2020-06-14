// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = prompt("how long do you want your password to be?")
var uppercase
var lowercase
var symbols
var numbers
var option={
  uppercase: 
    confirm("do you want to use upper case character?")
  ,
  lowercase: confirm("do you want to use lower case character?"),
  symbols:confirm("do you want to use symbols?"),
  numbers:confirm("do you want to use numbers?"),

}
var possibleCharacters =[]

if(+(length) < 8 || +(length)>32){
  prompt("you must select a length greater than 8 and less than 32")
  length = prompt("how long do you want your password to be?")
}
if(option.uppercase === true){
  possibleCharacters.push(uppercase)
}

function(i=0;password.length;i++){
document.querySelector("#password").innerHTML += password[i]}

generateBtn.addEventListener("click", function(){

  
  var array =  ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~",1, 2, 3, 4, 5, 6, 7, 8, 9,"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A","B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    // created loop
  for(i=0;i<userlength;i++){
    password.push(array[Math.floor(array.length * Math.random())])
}
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  }
})

// Add event listener to generate button
generateBtn.addEventListener("click", function(event){
  event.preventDefault()
});
document.getElementById("display").array=password;
document.getElementById(display).innerHTML+= "password";




