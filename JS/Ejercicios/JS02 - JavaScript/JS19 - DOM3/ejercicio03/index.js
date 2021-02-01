let shouldRender = true;

(() => {
	let images = document.querySelectorAll('img');
	for (image of images) image.addEventListener('click', handleClick);
})();

function handleClick({ target }) {
	if (shouldRender) {
		let newFigure = document.createElement('figure');
		let newImg = document.createElement('img');
		let newFigcaption = document.createElement('figcaption');

		Object.assign(newImg.style, imageStyles);
		Object.assign(newFigure.style, figureStyles);

		newFigure.appendChild(newImg);
		newFigure.appendChild(newFigcaption);
		newFigcaption.textContent = target.dataset.author;
		newImg.src = target.src;
		newImg.addEventListener('click', ({ target }) => {
			target.parentElement.remove();
			shouldRender = !shouldRender;
		});
		console.log(target.dataset);
		document.body.appendChild(newFigure);
		shouldRender = !shouldRender;
	}
}

const figureStyles = {
	position: 'fixed',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	top: '-20px',
	height: '100vh',
	width: '100vw',
	backgroundColor: '#00000081'
};

const imageStyles = {
	maxWidth: '300px',
	maxHeight: '300px'
};
