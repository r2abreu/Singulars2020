globalThis.addEventListener('DOMContentLoaded', function() {
	let submit = document.querySelector('[type="submit"]');
	submit.addEventListener('click', function() {
		showResult();
	});
});

const showResult = () => {
	let number = parseInt(document.querySelector('#number').value);
	let counter = 0;

	for (let i = 1; i <= number; i++) {
		if (number % i === 0) {
			counter++;
		}
	}
	let result = counter > 2 ? 'No primo' : 'Primo';
	let output = document.querySelector('output');
	output.textContent = result;
};
