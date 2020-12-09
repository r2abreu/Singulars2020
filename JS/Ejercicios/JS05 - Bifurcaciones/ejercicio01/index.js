let inputs = document.querySelectorAll('input');
let [ first, second, third, submit ] = inputs;
let output = document.createElement('p');

submit.addEventListener('click', function(event) {
	let averageScore = (+first.value + +second.value + +third.value) / 3;
	console.log(averageScore);
	averageScore >= 5 ? approved() : failed();
	document.body.appendChild(output);
});

let approved = () => {
	output.textContent = 'Enhorabuena, has aprobado el curso.';
};

let failed = () => {
	output.textContent = 'Lo siento, has reprobado el curso.';
};
