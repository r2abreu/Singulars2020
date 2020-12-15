selectInputs();

function factorial(n) {
	let result = n;

	if (n === 0) {
		return 1;
	}

	while (n > 1) {
		n--;
		result *= n;

		result *= n;
		// n = 4.  5 * 4 = 20;
		// n = 3.  20 * 3 = 60;
		// n = 2.  60 * 2 = 120;
	}

	return result;

	// With Factorial
	// else {
	// 	console.log(n);
	// 	return factorial(n - 1) * n;
	// }
}

function selectInputs() {
	console.log(number);
	let submit = document.querySelector('[type="submit"]');
	submit.addEventListener('click', function() {
		let number = parseInt(document.querySelector('#number').value);
		showResult(number);
	});
}

function showResult(number) {
	let output = document.querySelector('output');
	output.textContent = factorial(number).toLocaleString();
}
