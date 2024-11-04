let favNumber = Math.floor(Math.random() * 30) + 1; 

let guess;
while (guess !== favNumber) {
    guess = parseInt(prompt("Guess the favorite number."));

    if (guess < favNumber) {
        alert("Too low, try again.");
    } else if (guess > favNumber){
        alert("Too high, try again.")
    } else {
        alert("Correct, you guessed the favorite number.");
        break;
    }
}
