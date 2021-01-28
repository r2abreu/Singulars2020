// IIFE

(() => {
	let button = document.querySelector('button');
	button.addEventListener('click', handleClick);
})();

function handleClick() {
	let random = Math.floor(Math.random() * 6) + 1;
	createImage(random);
}

function createImage(random) {
	// Clear child elments
	let main = document.querySelector('main');
	main.firstElementChild && main.firstElementChild.remove();
	// Append image
	let image = document.createElement('img');
	image.src = `./assets/${random}.svg`;
	main.appendChild(image);
}
