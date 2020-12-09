let inputs = document.querySelectorAll('input');
let [ altura, base, submit ] = inputs;
let output = document.createElement('output');

submit.addEventListener('click', function(event) {
	[ base, altura ].every(validate) ? showResult(calcAreaAndPerimeter()) : promptError();
});

const validate = (input) => {
	return typeof parseInt(input.value) === 'number' && input.value >= 0;
};

let showResult = (result) => {
	output.textContent = `El área de la figura es ${result.area} y el perímetro es ${result.perimeter}.`;
	document.body.appendChild(output);
};

let calcAreaAndPerimeter = () => {
	let rectangle = {};
	rectangle.area = altura.value * base.value;
	rectangle.perimeter = 2 * (+altura.value + +base.value);
	return rectangle;
};

let promptError = () => {
	output.textContent = 'Por favor, introduce valores correctos.';
	document.body.appendChild(output);
};
