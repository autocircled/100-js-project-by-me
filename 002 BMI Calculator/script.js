const btn = document.querySelector(".btn"),
	result = document.querySelector(".result"),
	reset = document.querySelector(".reset");

btn.addEventListener("click", calculateBMI);

function calculateBMI(e) {
	e.preventDefault();

	let height = document.querySelector(".height").value;
	let weight = document.querySelector(".weight").value;

	// console.log(height, weight);

	// Validate Input
	if (height === "" || isNaN(height)) {
		showResult(`Provide a valid <strong>Height!</strong>`, "red", "white");
	} else if (weight === "" || isNaN(weight)) {
		showResult(`Provide a valid <strong>Weight!</strong>`, "red", "white");
	} else {
		height = height / 100;
		let bmi = (weight / Math.pow(height, 2)).toFixed(2);
		// console.log(bmi);

		//   Categorize result
		if (bmi < 18.5) {
			showResult(`Underweight: <span>${bmi}</span>`, "orange", "black");
		} else if (bmi >= 18.5 && bmi < 24.9) {
			showResult(`Normal: <span>${bmi}</span>`, "green", "white");
		} else if (bmi >= 25.0 && bmi < 29.9) {
			showResult(`Overweight: <span>${bmi}</span>`, "blue", "white");
		} else {
			showResult(`Obese: <span>${bmi}</span>`, "red", "white");
		}
	}

	reset.style.display = "block";
}

function showResult(val, bgColor, textColor) {
	result.style.backgroundColor = bgColor;
	result.style.color = textColor;
	return (result.innerHTML = val);
}

reset.addEventListener("click", () => {
	document.querySelector("form").reset();
	reset.style.display = "none";
	result.style.display = "none";
})