let [ input, select, submit ] = document.querySelectorAll('input, select');
let output = document.querySelector('output');
submit.addEventListener('click', function(event) {
	parseFloat(input.value) > 0 ? sortTier(parseFloat(input.value), parseFloat(select.value)) : promptError();
});

const sortTier = (salary, tier) => {
	switch (tier) {
		case 0.3:
			calculateSalary(salary, 0.3);
			break;
		case 0.05:
			calculateSalary(salary, 0.05);
			break;
		case -0.07:
			calculateSalary(salary, -0.07);
			break;
	}
};

const calculateSalary = (previous, percentage) => {
	showResult(previous + previous * percentage);
};

const showResult = (result) => {
	output.textContent = `Tu nuevo salario es de ${currencyFormat(result)}.`;
};

const currencyFormat = (value) => {
	return new Intl.NumberFormat('es-ES', {
		style: 'currency',
		currency: 'EUR'
	}).format(value);
};

let promptError = () => {
	output.textContent = 'Por favor, introduce valores correctos.';
};
