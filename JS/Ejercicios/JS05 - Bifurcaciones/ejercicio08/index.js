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
		if (Number.isNaN(triangle[property])) {
			console.log("error")
			return false;
		}
	}

	if (triangle.a + triangle.b <= triangle.c || triangle.a + triangle.c <= triangle.a || triangle.b + triangle.c <= triangle.a) {
		console.log(triangle.a + triangle.b <= triangle.c)
		return false;
	} else {
		return true;
	}
	
};

const showResults = (triangle, output) => {
	let typeOfTriangle = determineTriangle(triangle);
	output.textContent = `Este triángulo es un triángulo ${typeOfTriangle}. `;
};

const determineTriangle = (triangle) => {
	if (triangle.a === triangle.b && triangle.a === triangle.c) {
		return 'equilátero';
	} else if (triangle.b === triangle.c) {
		return 'isósceles';
	} else {
		return 'escaleno';
	}
};

const promptError = (output) => {
	output.textContent = 'Por favor, revisa que estes ingresando solo números positivos y que los valores formen realmente un triángulo.';
};
