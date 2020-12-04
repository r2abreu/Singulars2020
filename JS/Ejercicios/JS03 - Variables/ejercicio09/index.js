/*
	START
*/

let inputs = document.querySelectorAll('input');

let [
	gasRate,
	cityConsumption,
	highwayConsumption,
	cityDistance,
	highwayDistance,
	calculateButton,
	resetButton
] = inputs;

/* 
	Listen for a calculate or reset event on buttons
*/

[ calculateButton, resetButton ].forEach((button) => {
	button.addEventListener('click', function(event) {
		event.target.type === 'reset' ? resetValues() : validateAndShowValues();
	});
});

/* 
	If reset button
*/

let resetValues = () => {
	inputs.forEach((input) => {
		input.type === 'submit' || input.type === 'reset' ? null : (input.value = null);
	});
	document.querySelector('output').textContent = null;
};

/* 
	If calculate button.
	Validate the values. If values are valid, calculate the cost else prompt an error.
*/

let validateAndShowValues = () => {
	if ([ gasRate, cityConsumption, highwayConsumption, cityDistance, highwayDistance ].every(validator)) {
		document.querySelector('output').textContent = tripCost();
	} else {
		document.querySelector('output').textContent = 'Por favor, asegurate que los valores son correctos';
	}
};

const validator = (input) => {
	return parseFloat(input.value) && input.value > 0;
};

/*
	Calculate the cost, format and return the result.
*/

let tripCost = () => {
	let cityDistancePer100km = cityDistance.value / 100; // Units of 100 km
	let highwayDistancePer100km = highwayDistance.value / 100; // Units of 100 km
	let cityTotalConsumption = cityDistancePer100km * cityConsumption.value; // Lts / 100 km
	let highwayTotalConsumption = highwayDistancePer100km * highwayConsumption.value; // Lts / 100 km

	return formatResult(highwayTotalConsumption * gasRate.value + cityTotalConsumption * gasRate.value);
};

const formatResult = (value) => {
	return new Intl.NumberFormat('es-ES', {
		style: 'currency',
		currency: 'EUR'
	}).format(value);
};

/* 
	END
*/
