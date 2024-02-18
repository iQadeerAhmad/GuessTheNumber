let submitBtn = document.querySelector("#subt");
let alertMessage = document.querySelector(".alertMessage");

submitBtn.addEventListener("click", validateNumber);

function validateNumber(event) {
	event.preventDefault();

	alertMessage.style.display = "none";

	let numberInput = parseInt(document.querySelector("#guessField").value);
	if (numberInput === "" || isNaN(numberInput)) {
		alertMessage.style.display = "block";
		alertMessage.style.color = "red";
		alertMessage.innerHTML = "Please enter a valid number between 1 and 100.";
	}

	numberInput = parseInt(numberInput);

	if (numberInput < 1 || numberInput > 100) {
		alertMessage.style.display = "block";
		alertMessage.style.color = "red";
		alertMessage.innerHTML = "Please enter a number between 1 and 100";
	} else {
		updateGuess(numberInput);
	}
}
