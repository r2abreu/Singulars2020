globalThis.addEventListener('DOMContentLoaded', function() {
	let submit = document.querySelector('[type="submit"]');
	submit.addEventListener('click', function() {
		showResult();
	});
});

const showResult = () => {
	let number = parseInt(document.querySelector('#number').value);
	let output = document.querySelector('output');
	output.innerHTML = '';
	for (let i = 0; i < number; i++) {
		if (number % i === 0) {
			output.innerHTML += `${i} <br/>`;
		}
	}
};
