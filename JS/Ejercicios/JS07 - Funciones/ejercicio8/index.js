(function() {
	globalThis.addEventListener('DOMContentLoaded', function() {
		generateCanvas();
		let divs = document.querySelectorAll('div');
		divs.forEach((div) => {
			div.addEventListener('mouseover', function() {
				let color = document.querySelector('[type="color"]').value;
				colorea(this, color);
			});
		});
	});
})();

const generateCanvas = () => {
	for (let i = 0; i < 10000; i++) {
		let div = document.createElement('div');
		document.querySelector('section').appendChild(div);
	}
};

const colorea = (elem, color) => {
	elem.style.backgroundColor = color;
};
