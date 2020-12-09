let [ input, select, submit ] = document.querySelectorAll('input, select');
let output = document.querySelector('output');
let previousSalary = parseFloat(input.value);
let salaryTier = parseFloat(select.value);
submit.addEventListener('click', function(event) {
	sortTier(parseFloat(select.value));
});

const sortTier = (tier) => {
	switch (tier) {
		case 0.3:
			calculateSalary(previousSalary, 0.3);
			break;
		case 0.05:
			calculateSalary(previousSalary, 0.05);
			break;
		case -0.07:
			calculateSalary(previousSalary, -0.07);
			break;
	}
};

const calculateSalary = (previous, percentage) => {
	showResult(previous + previous * percentage);
};

const showResult = (result) => {
	output.textContent = `Tu nuevo salario es de ${currencyFormat(result)}`;
};

const currencyFormat = (value) => {
	return new Intl.NumberFormat('es-ES', {
		style: 'currency',
		currency: 'EUR'
	}).format(value);
};
