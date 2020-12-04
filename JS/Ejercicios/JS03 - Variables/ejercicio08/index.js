const HIGHWAY_CONSUMPTION = 5.5;
const CITY_CONSIMPTION = 9.8;
const GAS_RATE = 1.1;

let inputs = document.querySelectorAll('input');

let [ cityDistanceInput, highwayDistanceInput, calculateButton, resetButton ] = inputs;

console.log(cityDistanceInput, highwayDistanceInput);

[ calculateButton, resetButton ].forEach((button) => {
	button.addEventListener('click', function(event) {
		event.target.type === 'submit' ? showValues() : resetValues();
	});
});

let showValues = () => {
	document.querySelector('output').textContent = tripCost();
};

let tripCost = () => {
	let highwayDistance = highwayDistanceInput.value / 100; // Units of 100 km
	let cityDistance = cityDistanceInput.value / 100; // Units of 100 km
	let highwayTotalConsumption = highwayDistance * 5.5; // Lts / 100 km
	let cityTotalConsumption = cityDistance * 9.8; // Lts / 100 km

	return new Intl.NumberFormat('es-ES', {
		style: 'currency',
		currency: 'EUR'
	}).format(highwayTotalConsumption * GAS_RATE + cityTotalConsumption * GAS_RATE);
};

let resetValues = () => {
	inputs.forEach((input) => {
		input.type === 'submit' || input.type === 'reset' ? null : (input.value = null);
	});
};
