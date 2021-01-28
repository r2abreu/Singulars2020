// IIFE

(() => {
	let divs = document.querySelectorAll('div');
	divs[0].addEventListener('mouseenter', () => {
		handleMouse(divs);
	});
	divs[1].addEventListener('mouseenter', () => {
		handleSingleCreation(event);
	});
	divs[2].addEventListener('mouseenter', (event) => {
		handleSingleCreation(event);
	});
	divs[2].addEventListener('mouseleave', (event) => {
		handleSingleDestruction(event);
	});
})();

function handleMouse(divs) {
	let newDiv = document.createElement('div');
	newDiv.innerText = 'Pasaste el raton';
	console.log(divs);
	divs[0].appendChild(newDiv);
}

function handleSingleCreation({ target }) {
	let newDiv = document.createElement('div');
	newDiv.innerText = 'Pasaste el raton';
	target.firstElementChild || target.appendChild(newDiv);
}

function handleSingleDestruction({ target }) {
	target.firstElementChild && target.firstElementChild.remove();
}
