globalThis.addEventListener('DOMContentLoaded', function() {
	let submit = document.querySelector('[type="submit"]');
	submit.addEventListener('click', function() {
		showResult();
	});
});

const showResult = () => {
	let base = parseInt(document.querySelector('#base').value);
	let exponent = parseInt(document.querySelector('#exponent').value);
	let output = document.querySelector('output');
	let result = 1;

	for (let i = 1; i <= Math.abs(exponent); i++) {
		result *= base;
	}

	if (exponent < 0) {
		result = 1 / result;
	}
	output.textContent = result.toLocaleString();
};
