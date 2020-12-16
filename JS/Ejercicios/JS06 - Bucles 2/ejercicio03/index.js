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
	if (exponent > 0) {
		for (let i = 0; i < exponent; i++) {
			result *= base;
		}
	} else if (exponent < 0) {
		let divider = 1;
		for (let i = 0; i < Math.abs(exponent); i++) {
			divider *= base; //  Exponent
			result = 1 / divider;
		}
	}
	output.textContent = result.toLocaleString();
};
