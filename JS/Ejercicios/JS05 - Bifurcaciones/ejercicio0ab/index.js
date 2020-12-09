globalThis.addEventListener('DOMContentLoaded', function() {
	let [ theory, practice, extra, submit, output ] = document.querySelectorAll('input, output');
	submit.addEventListener('click', function() {
		showResult(theory, practice, extra, output);
	});
});

const showResult = (theory, practice, extra, output) => {
	output.textContent = `El resultado es ${calcular(theory, practice, extra)}`;
};

const calcular = (theory, practice, extra) => {
	let score = theory.value * 0.3 + practice.value * 0.7;
	if (extra.checked) {
		score++;
	}

	if (score > 10) {
		score = 10;
	}

	return score;
};
