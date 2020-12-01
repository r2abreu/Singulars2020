window.addEventListener('DOMContentLoaded', function(event) {
	const triangleInputs = document.querySelectorAll('.triangle');
	triangleInputs.forEach((input) => {
		input.addEventListener('keyup', function(event) {
			calcTriangle();
		});
	});

	const temperatureInputs = document.querySelectorAll('.temperature');
	temperatureInputs.forEach((input) => {
		input.addEventListener('keyup', function(event) {
			event.key === 'Enter' ? calcTemp(event) : null;
		});
	});

	const distanceInputs = document.querySelectorAll('.distance');
	distanceInputs.forEach((input) => {
		input.addEventListener('keyup', function(event) {
			event.key === 'Enter' ? calcDistance(event) : null;
		});
	});
});

// Ejercicio 02: Triangulo

const calcTriangle = () => {
	let height = document.querySelector('#height');
	let base = document.querySelector('#base');
	let area = height.value * base.value / 2;
	document.querySelector('p:first-of-type span').textContent = area;
};

// Ejercicio 03: Grados

const calcTemp = ({ target }) => {
	let farenheit = document.querySelector('#farenheit');
	let celsius = document.querySelector('#celsius');
	if (target.id === 'farenheit') {
		celsius.value = Math.round((farenheit.value - 32) * 5 / 9);
	} else {
		farenheit.value = Math.round(celsius.value * 9 / 5 + 32);
	}
};

// Ejercicio 04: Km to miles

const calcDistance = ({ target }) => {
	let kilometers = document.querySelector('#kilometers');
	let miles = document.querySelector('#miles');
	if (target.id === 'kilometers') {
		miles.value = Math.round(kilometers.value / 1.609);
	} else {
		kilometers.value = Math.round(miles.value * 1.609);
	}
};
