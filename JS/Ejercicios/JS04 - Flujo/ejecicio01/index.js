let inputs = document.querySelectorAll('input, select');
let [ price, iva, submit ] = inputs;
let output = document.querySelector('output');

submit.addEventListener('click', function(event) {
	let result = Math.round(price.value * iva.value);
	output.textContent = formatResult(result);
});

const formatResult = (value) => {
	return new Intl.NumberFormat('es-ES', {
		currency: 'EUR',
		style: 'currency'
	}).format(value);
};
