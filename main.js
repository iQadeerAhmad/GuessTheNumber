let submitBtn = document.querySelector("#subt");
let alertMessage = document.querySelector(".alertMessage");
let previousGuesses = document.querySelector(".guesses");
let remainingGuess = document.querySelector(".lastResult");
let lowHigh = document.querySelector(".lowOrHi");

let guessAttempts = 0;

submitBtn.addEventListener("click", validateNumber);

let randomNumber = parseInt(Math.random() * 100);

function updateGuess(numberInput) {
	if (numberInput == randomNumber) {
		alert("You Won 🎉");
		location.reload();
	} else {
		previousGuesses.innerHTML += `${numberInput}, `;
		remainingGuess.innerHTML = `${10 - guessAttempts}`;
		if (guessAttempts < 10) {
			if (numberInput < randomNumber) {
				lowHigh.innerHTML = "Your guess is way too low! Try a higher number. ";
			} else {
				lowHigh.innerHTML = "Your guess is way too high! Try a lower number.";
			}
		} else {
			alert("You lost");
			location.reload();
		}
	}
}

function validateNumber(event) {
	event.preventDefault();

	alertMessage.style.display = "none";

	let numberInput = parseInt(document.querySelector("#guessField").value);
	if (numberInput === "" || isNaN(numberInput)) {
		alertMessage.style.display = "block";
		alertMessage.style.color = "red";
		alertMessage.innerHTML = "Please enter a valid number between 1 and 100.";
	} else {
		numberInput = parseInt(numberInput);

		if (numberInput < 1 || numberInput > 100) {
			alertMessage.style.display = "block";
			alertMessage.style.color = "red";
			alertMessage.innerHTML = "Please enter a number between 1 and 100";
		} else {
			document.querySelector("#guessField").value = "";

			guessAttempts++;

			updateGuess(numberInput);
		}
	}
}
