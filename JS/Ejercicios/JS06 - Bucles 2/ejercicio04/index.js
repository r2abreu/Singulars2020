globalThis.addEventListener('DOMContentLoaded', function() {
	let submit = document.querySelector('[type="submit"]');
	submit.addEventListener('click', function() {
		showResult();
	});
});

const showResult = () => {
	let number = parseInt(document.querySelector('#number').value);
	let isPrime = true;
	let output = document.querySelector('output');
	console.log(number === 1);
	if (number === 1) {
		output.textContent = 'El número 1 no es primo ni compuesto.';
	} else {
		for (let i = 2; i < number; i++) {
			console.log(i);
			if (number % i === 0) {
				isPrime = false;
				break;
			}
		}
		output.textContent = isPrime ? 'Primo.' : 'No primo.';
	}
};
