(() => {
	let div = document.querySelector('div');
	div.addEventListener('mouseenter', handleMouseEnter);
	div.addEventListener('mouseleave', handleMouseLeave);
})();

function handleMouseEnter({ target }) {
	let parragraphs = target.querySelectorAll('p');
	for (p of parragraphs) {
		p.style.fontStyle = 'italic';
		p.addEventListener('mouseenter', ({ target }) => {
			target.style.fontWeight = 'bolder';
		});
		p.addEventListener('mouseleave', ({ target }) => {
			target.style.fontWeight = 'initial';
		});
	}
}

function handleMouseLeave({ target }) {
	let parragraphs = target.querySelectorAll('p');
	for (p of parragraphs) {
		p.style.fontStyle = 'initial';
	}
}
