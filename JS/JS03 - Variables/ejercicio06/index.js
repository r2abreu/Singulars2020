globalThis.addEventListener('DOMContentLoaded', function(event) {
	let input = document.querySelector('input');
	let parragraph = document.querySelector('p');
	input.addEventListener('keyup', function(event) {
		event.key === 'Enter' ? isEven(event) : null;
		parragraph.classList.add('show');
	});
});

let isEven = ({ target }) => {
	let output = document.querySelector('output');
	target.value % 2 === 0 ? (output.textContent = 'par.') : (output.textContent = 'impar.');
};
