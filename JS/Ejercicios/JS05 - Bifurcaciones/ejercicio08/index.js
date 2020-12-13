globalThis.addEventListener('DOMContentLoaded', function(event) {
	const submit = document.querySelector('[type="submit"]');
	submit.addEventListener('click', function(event) {
		selectElements();
	});
});

const selectElements = () => {
	const inputs = document.querySelectorAll('input');
	let output = document.querySelector('output');
	let triangle = {};
	triangle.a = parseFloat(inputs[0].value);
	triangle.b = parseFloat(inputs[1].value);
	triangle.c = parseFloat(inputs[2].value);

	validateInputs(triangle) ? showResults(triangle, output) : promptError(output);
};

const validateInputs = (triangle) => {
	for (let property in triangle) {
		if (triangle[property] <= 0 || Number.isNaN(triangle[property])) return false;
	}
	return true;
};

const showResults = (triangle, output) => {
	let typeOfTriangle = determineTriangle(triangle);
	output.textContent = `Este triángulo es un triángulo ${typeOfTriangle}. `;
};

const determineTriangle = (triangle) => {
	if (triangle.a === triangle.b && triangle.a === triangle.c) {
		return 'equilátero';
	}

	if (!(triangle.a === triangle.b && triangle.a === triangle.c)) {
		if (triangle.b === triangle.c) {
			return 'isósceles';
		} else {
			return 'escaleno';
		}
	}
};

const promptError = (output) => {
	output.textContent = 'Por favor, revisa que estes ingresando solo números positivos';
};
