//5--> random game number

let gameNumber = 27;

let userNum = prompt("guess the game number: ");

while (userNum !=  gameNumber) {
    userNum = prompt("You entered wrong nummber, guess again : ");
}

console.log("congratulations,you entered the right number");
