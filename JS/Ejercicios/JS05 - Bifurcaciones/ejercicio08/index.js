globalThis.addEventListener('DOMContentLoaded', function(event) {
	const submit = document.querySelector('[type="submit"]');
	submit.addEventListener('click', function(event) {
		selectElements();
	});
});

const selectElements = () => {
	const inputs = document.querySelectorAll('input');
	let triangle = {};
	triangle.a = parseFloat(inputs[0].value);
	triangle.b = parseFloat(inputs[1].value);
	triangle.c = parseFloat(inputs[2].value);

	validateInputs(triangle) ? showResults(triangle) : promptError();
};

const validateInputs = (triangle) => {
	for (let property in triangle) {
		console.log(triangle[property]);
		if (triangle[property] < 0 || Number.isNaN(triangle[property])) return false;
	}
	return true;
};

const showResults = (triangle) => {
	let typeOfTriangle = determineTriangle(triangle);
	console.log(typeOfTriangle);
};

const determineTriangle = (triangle) => {
	if (triangle.a === triangle.b && triangle.a === triangle.c) {
		return 'equilatero';
	}

	if (triangle.a !== triangle.b && triangle.a !== triangle.c) {
		return 'escaleno';
	}

	return 'isoceles';
};
