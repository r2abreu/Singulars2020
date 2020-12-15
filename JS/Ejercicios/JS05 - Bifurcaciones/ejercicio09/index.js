globalThis.addEventListener('DOMContentLoaded', function() {
	let output = document.querySelector('output');
	let buttons = document.querySelectorAll('[type="submit"], [type="reset"]');
	let random = reset(output);
	let attempts = 0;
	buttons.forEach((button) => {
		button.addEventListener('click', function(event) {
			if (event.target.type === 'submit') {
				selectInputs(random, output);
				attempts++;
			} else {
				random = reset(output, attempts);
				attempts = 0;
			}

			if (attempts === 7) {
				output.classList.toggle('bad');
			} else{
				output.classList.remove('bad');
			}
		});
	});
});

const selectInputs = (random, output) => {
	let guess = parseInt(document.querySelector('input').value);

	validateInputs(guess) ? showResult(guess, random, output) : promptError(output);
};

const validateInputs = (input) => {
	if (input <= 0 || input > 128 || Number.isNaN(input)) {
		return false;
	}

	return true;
};

const showResult = (guess, random, output) => {
	let result = inputRelToRandom(guess, random);
	switch (result) {
		case 'lower':
			output.textContent = 'El número que buscas es mas bajo.';
			break;
		case 'higher':
			output.textContent = 'El número que buscas es mas alto.';
			break;
		case 'equal':
			output.textContent = 'Genial, has adivinado!';
			break;
		default:
			console.log('Switch error');
	}
};

const inputRelToRandom = (guess, random) => {
	if (random < guess) {
		return 'lower';
	}

	if (random > guess) {
		return 'higher';
	}

	return 'equal';
};
const promptError = (output) => {
	output.textContent = 'Por favor, solo puede ser un número entre 0 y 128';
};

const reset = (output) => {
	output.textContent = '';
	return parseInt(Math.random() * 128 + 1);
};
