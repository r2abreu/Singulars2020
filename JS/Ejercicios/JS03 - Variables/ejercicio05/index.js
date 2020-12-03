let currency = document.querySelector('#currency');
let toEuro = document.querySelector('button:first-of-type');
let toPesetas = document.querySelector('button:last-of-type');
let output = document.querySelector('output');
let buttons = document.querySelectorAll('button');

// Add event listeners to buttons

buttons.forEach((button) => {
	button.addEventListener('click', function(event) {
		exchange(event);
	});
});

// Define the event handlers

const exchange = ({ target: { id } }) => {
	if (id === 'euro') {
		output.textContent = `${formatCurrency('ESP', currency.value)} son ${formatCurrency(
			'EUR',
			currency.value / 166.38
		)}  `;
	} else {
		output.textContent = `${formatCurrency('EUR', currency.value)} son ${formatCurrency(
			'ESP',
			currency.value * 166.38
		)} `;
	}
};

// Define currency exchange function

const formatCurrency = (currency, amount) => {
	return new Intl.NumberFormat('es-ES', {
		style: 'currency',
		currency: `${currency}`
	}).format(amount);
};
