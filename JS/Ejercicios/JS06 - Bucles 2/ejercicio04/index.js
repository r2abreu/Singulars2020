globalThis.addEventListener('DOMContentLoaded', function() {
	let submit = document.querySelector('[type="submit"]');
	submit.addEventListener('click', function() {
		showResult();
	});
});

const showResult = () => {
	let number = parseInt(document.querySelector('#number').value);
	let isPrime = true;

	for (let i = 2; i < number; i++) {
		console.log(i);
		if (number % i === 0) {
			isPrime = false;
			break;
		}
	}
	let output = document.querySelector('output');
	output.textContent = isPrime ? 'Primo.' : 'No primo.';
};
