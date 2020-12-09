let inputs = document.querySelectorAll('input');
let [ lenght, width, submit ] = inputs;
let output = document.createElement('output');

submit.addEventListener('click', function(event) {
	[ width, lenght ].every(validate) ? showResult(calcAreaAndPerimeter()) : promptError();
});

const validate = (input) => {
	return typeof +input === 'number';
};

let showResult = (result) => {
	output.textContent = `El área de la figura es ${result.area} y el perímetro es ${result.perimeter}.`;
	document.body.appendChild(output);
};

let calcAreaAndPerimeter = () => {
	let rectangle = {};
	rectangle.area = lenght.value * width.value;
	rectangle.perimeter = 2 * (+lenght.value + +width.value);
	return rectangle;
};

let promptError = () => {
	output.textContent = 'Por favor, introduce valores correctos.';
};
