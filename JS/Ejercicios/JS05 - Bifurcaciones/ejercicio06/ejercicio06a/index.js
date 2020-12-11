globalThis.addEventListener('DOMContentLoaded', function() {
	let submit = document.querySelector('[type="submit"]');
	submit.addEventListener('click', function() {
		compare();
	});
});

const compare = () => {
	let inputs = document.querySelectorAll('input');
	let n1 = parseFloat(inputs[0].value);
	let n2 = parseFloat(inputs[1].value);
	let n3 = parseFloat(inputs[2].value);
	let output = document.querySelector('output');
	let bigger;
	if (n1 > n2) {
		if (n1 > n3) {
			bigger = n1;
		} else {
			bigger = n3;
		}
	} else {
		if (n2 > n3) {
			bigger = n2;
		} else {
			bigger = n3;
		}
	}
	output.textContent = bigger;
};
