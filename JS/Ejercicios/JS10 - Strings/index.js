// IIFE

(function() {
	let button = document.querySelector('button');
	button.addEventListener('click', handleClick);
})();

function handleClick() {
	let outputs = document.querySelectorAll('output');
	let string = document.querySelector('p').textContent.slice(8);

	outputs[0].textContent = string.charAt(5);
	outputs[1].textContent = string.concat(' - Miguel De Cervantes');
	outputs[2].textContent = string.replace('fermosura', 'hermosura');
	outputs[3].textContent = string.indexOf('razón');

	outputs.forEach((output) => output.classList.add('output'));
}
