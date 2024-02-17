let submitBtn = document.querySelector("#subt");

submitBtn.addEventListener("click", subtFunction);

function subtFunction(event) {
	event.preventDefault();

	let numberGuessed = document.querySelector("#guessField").value;
	console.log(numberGuessed);
}
