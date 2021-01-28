// IFEE

(() => {
	let buttons = document.querySelectorAll('button');
	handleButtons(buttons);
})();

function handleButtons(buttons) {
	buttons[0].addEventListener('click', createParragraph);
	buttons[1].addEventListener('click', setOrRemoveAttribute);
	buttons[1].addEventListener('click', setOrRemoveAttribute);
	buttons[3].addEventListener('click', removeParragraph);
	buttons[4].addEventListener('click', removeDescendant);
	buttons[5].addEventListener('click', replaceDescendant);
	buttons[6].addEventListener('click', deleteAllContent);
}

function createParragraph() {
	let output = document.querySelector('.output');
	let parragraph = document.createElement('p');
	parragraph.classList.add('example');
	parragraph.innerText = 'Este es un nuevo parrafo';
	output.appendChild(parragraph);
}

function setOrRemoveAttribute(event) {
	let parragraph = document.querySelector('.example');
	if (event.target.innerText.includes('Remover')) {
		parragraph.removeAttribute('title');
	} else {
		parragraph.setAttribute('title', 'Este es el titulo de mi parrafo');
	}
}

function removeParragraph() {
	let parragraph = document.getElementsByTagName('p')[1];
	parragraph.remove();
}

function removeDescendant() {
	let parragraph = document.querySelector('.example');
	parragraph.parentNode && parragraph.parentNode.removeChild(parragraph);
}

function replaceDescendant() {
	let oldParragraph = document.querySelectorAll('.example')[0];
	let newParragraph = document.createElement('p');
	newParragraph.innerText = 'Soy el reemplazo del viejo parrafo';

	if (oldParragraph.parentNode) {
		oldParragraph.parentNode.replaceChild(newParragraph, oldParragraph);
	}
}

function deleteAllContent() {
	let main = document.querySelector('main');
	let mainChildren = main.children;
	console.log(mainChildren);

	do {
		main.removeChild(main.firstChild);
	} while (mainChildren);
}
