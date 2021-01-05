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
	outputs[4].textContent = string.lastIndexOf('razón');
	// La diferencia entre indexOf y search es que Search te permite especificar regExp, mientras que indexOf solo permite especificar texto plano
	outputs[5].textContent = string.search('razón');
	outputs[6].textContent = string.slice(0, 10);
	outputs[7].textContent = JSON.stringify(string.split(' '));
	outputs[8].textContent = string.substring(0, 10);
	outputs[9].textContent = string.toLowerCase();
	outputs[10].textContent = string.toUpperCase();
	outputs[11].textContent = string.trim();

	outputs.forEach((output) => output.classList.add('output'));
}
