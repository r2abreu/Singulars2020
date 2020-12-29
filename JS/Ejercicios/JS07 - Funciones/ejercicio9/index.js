let borrar = false;

(function() {
	globalThis.addEventListener('DOMContentLoaded', function() {
		generateCanvas();
		let section = document.querySelector('section');
		let eraser = document.querySelector('[type="image"]');
		document.querySelector('[type="color"]').addEventListener('change', function() {
			borrar = !borrar;
		});
		eraser.addEventListener('click', function() {
			borrar = !borrar;
		});
		section.addEventListener('click', onMouseClick);
	});
})();

const generateCanvas = () => {
	for (let i = 0; i < 10000; i++) {
		let div = document.createElement('div');
		document.querySelector('section').appendChild(div);
	}
};

function colorea() {
	let color = document.querySelector('[type="color"]').value;
	this.style.backgroundColor = borrar ? '#fff' : color;
}

function onMouseClick() {
	[ ...this.children ].forEach((div) => {
		div.addEventListener('mouseover', colorea);
	});
	this.addEventListener('click', removeListener);
}

function removeListener() {
	[ ...this.children ].forEach((div) => {
		div.removeEventListener('mouseover', colorea);
	});
	this.removeEventListener('click', removeListener);
}
