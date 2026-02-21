//Guess the number game
let gameNum =24;
let userNum= prompt("Guess the game number :");
while(userNum != gameNum){
    //!== not used because prompt taken is string
   userNum =  prompt("You entered wrong number, guess again:");
    
}
console.log("Congratulations you guessed the number");