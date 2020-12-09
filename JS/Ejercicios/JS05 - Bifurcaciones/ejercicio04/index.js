globalThis.addEventListener('DOMContentLoaded', function() {
	let select = document.querySelector('select');
	let radius = document.querySelector('#radius');
	select.addEventListener('change', function(event) {
		cirCalcs(event, radius);
	});
});

const cirCalcs = ({ target }, radius) => {
	const PI = Math.PI;
	let perimeter = Math.round(2 * PI * radius.value);
	let area = Math.round(PI * radius.value ** 2);
	let diameter = Math.round(2 * radius.value);
	showValue(perimeter, area, diameter, target);
};

const showValue = (perimeter, area, diameter, target) => {
	let output = document.querySelector('output');
	switch (target.value) {
		case 'perimeter':
			output.textContent = `El perímetro es ${perimeter}`;
			break;
		case 'area':
			output.textContent = `El área es ${area}`;
			break;
		case 'diameter':
			output.textContent = `El diámetro es ${diameter}`;
			break;
		default:
			console.log('Problema de operandos');
	}
};
