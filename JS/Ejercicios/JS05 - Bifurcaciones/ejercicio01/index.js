let inputs = document.querySelectorAll('input');
let [ n1, n2, n3, submit ] = inputs;
let output = document.createElement('p');

submit.addEventListener('click', function(event) {
	let averageScore = (+n1.value + +n2.value + +n3.value) / 3;
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
