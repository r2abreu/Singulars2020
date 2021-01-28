// IIFE

(() => {
	let button = document.querySelector('button');
	button.addEventListener('click', handleClick);
})();

function handleClick() {
	let counter = 1;
	do {
		let parragraph = document.createElement('p');
		parragraph.innerText = `Este es el parrafo #${counter}`;
		document.body.appendChild(parragraph);
		console.log(parragraph);
		counter++;
	} while (counter <= 10);
	handleParragrahs();
}

function handleParragrahs() {
	let parragraphs = document.querySelectorAll('p');
	for (p of parragraphs) {
		p.addEventListener('click', (event) => {
			event.target.remove();
			alert(`El parrafo ${event.target.innerText.slice(-2)} ha sido eliminado`);
		});
	}
}
