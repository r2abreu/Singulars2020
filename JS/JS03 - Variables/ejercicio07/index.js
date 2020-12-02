// Esperar por input del usuario

globalThis.addEventListener('DOMContentLoaded', function() {
	const buttons = document.querySelectorAll('[type="submit"], [type=reset]');
	buttons.forEach((button) => {
		button.addEventListener('click', function(event) {
			if (event.target.type === 'submit') {
				showResult();
			} else {
				resetInputs();
			}
		});
	});
});

// Show Results

const showResult = () => {
	// Select inputs
	const [ ...inputs ] = document.querySelectorAll('input:not([type="submit"]):not([type="reset"])');
	let output = document.querySelector('output');
	// Check if all the inputs have value and if so, show results
	if (inputs.every(validator)) {
		output.textContent = calculateRate(inputs);
		output.previousElementSibling.textContent = `El precio de tu envió es de:`;
	} else {
		output.previousElementSibling.textContent = `Por favor, rellena los campos correctamente.`;
		output.textContent = '';
	}
};

const validator = (input) => {
	return parseFloat(input.value) && input.value > 0;
};

// Reset Inputs

const resetInputs = () => {
	document.querySelectorAll('input:not([type="submit"]):not([type="reset"])').forEach((input) => {
		input.value = '';
	});
};

// Calculate Rate

const calculateRate = (inputs) => {
	const BASERATE = 2;
	// Destructure inputs into variables
	let [ height, width, lenght, weight ] = inputs;

	// Create Package object and assign dimensions in appropiate values
	let package = {
		height: parseFloat(height.value),
		width: parseFloat(width.value),
		lenght: parseFloat(lenght.value),
		weight: parseFloat(weight.value * 1000),
		volume: function() {
			return this.height * this.width * this.lenght;
		}
	};

	let extraWeight = package.weight / 100 * 0.1;
	let extraVolume = package.volume() * 0.005;
	return Intl.NumberFormat('es-ES', {
		style: 'currency',
		currency: `EUR`
	}).format(BASERATE + extraVolume + extraWeight);
};
