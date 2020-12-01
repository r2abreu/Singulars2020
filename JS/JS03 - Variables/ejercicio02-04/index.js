window.addEventListener('DOMContentLoaded', function() {
	// Select inputs
	const triangleInputs = document.querySelectorAll('.triangle');
	const distanceInputs = document.querySelectorAll('.distance');
	const temperatureInputs = document.querySelectorAll('.temperature');

	// Add Event Listeners

	const calculo = (nodes, method) => {
		nodes.forEach((input) => {
			input.addEventListener('keyup', function(event) {
				event.key === 'Enter' ? method(event) : null;
			});
		});
	};
	calculo(triangleInputs, calcTriangle);
	calculo(distanceInputs, calcDistance);
	calculo(temperatureInputs, calcTemp);
});

// Event Handlers

// Ejercicio 02: Triangulo

const calcTriangle = () => {
	let height = document.querySelector('#height');
	let base = document.querySelector('#base');
	let area = height.value * base.value / 2;
	document.querySelector('p:nth-of-type(2) span').textContent = area;
};

// Ejercicio 03: Grados

const calcTemp = ({ target }) => {
	let farenheit = document.querySelector('#farenheit');
	let celsius = document.querySelector('#celsius');
	if (target.id === 'farenheit') {
		celsius.value = `${Math.round((farenheit.value - 32) * 5 / 9)} C`;
	} else {
		farenheit.value = `${Math.round(celsius.value * 9 / 5 + 32)} F`;
	}
};

// Ejercicio 04: Distancias

const calcDistance = ({ target }) => {
	let kilometers = document.querySelector('#kilometers');
	let miles = document.querySelector('#miles');
	if (target.id === 'kilometers') {
		miles.value = `${Math.round(kilometers.value / 1.609)} millas`;
	} else {
		kilometers.value = `${Math.round(miles.value * 1.609)} km`;
	}
};
