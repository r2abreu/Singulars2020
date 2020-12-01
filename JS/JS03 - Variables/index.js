let num1 = document.querySelector('input:first-of-type');
let num2 = document.querySelector('input:nth-of-type(2)');
let num3 = document.querySelector('input:last-of-type');
let operation = document.querySelector('select');
let button = document.querySelector('button');
let output = document.querySelector('output');

const calculate = ({ value }) => {
	switch (value) {
		case 'sum':
			output.textContent = parseFloat(num1.value) + +num2.value;
			break;
		case 'substract':
			output.textContent = parseFloat(num1.value) - +num2.value;
			break;
		case 'multiply':
			output.textContent = parseFloat(num1.value) * +num2.value;
			break;
		case 'divide':
			output.textContent = parseFloat(num1.value) / +num2.value;
			break;
		default:
			console.log('Por favor, revisa los campos');
	}
};

button.addEventListener('click', function(event) {
	calculate(operation);
});
