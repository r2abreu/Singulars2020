// IIFE

(() => {
	let divs = document.querySelectorAll('div');
	divs[0].addEventListener('mouseenter', () => {
		handleMouse(event);
	});
	divs[1].addEventListener('mouseenter', () => {
		handleSingleCreation(event);
	});
	divs[2].addEventListener('mouseenter', () => {
		handleSingleCreation(event);
	});
	divs[2].addEventListener('mouseleave', () => {
		handleSingleDestruction(event);
	});
})();

function handleMouse({ target }) {
	let newDiv = document.createElement('div');
	newDiv.innerText = 'Pasaste el raton';
	target.appendChild(newDiv);
}

function handleSingleCreation({ target }) {
	let newDiv = document.createElement('div');
	newDiv.innerText = 'Pasaste el raton';
	target.firstElementChild || target.appendChild(newDiv);
}

function handleSingleDestruction({ target }) {
	target.firstElementChild && target.firstElementChild.remove();
}
