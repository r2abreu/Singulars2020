(function() {
	let submit = document.querySelector('[type="submit"]');
	submit.addEventListener('click', function() {
		let R = parseInt(document.querySelector('#resistencia').value);
		let L = parseInt(document.querySelector('#bobina').value);
		let C = parseInt(document.querySelector('#condensador').value);
		let F = parseInt(document.querySelector('#frecuencia').value);
		let xl = reactanciaInductiva(F, L);
		let xc = reactanciaCapacitiva(F, C);
		let z = impedanciaTotal(R, xl, xc);
		let output = document.querySelector('output');
		output.innerText = `${impedanciaTotal(R, xl, xc).toFixed(2)} kΩ`;
	});
})();

// Z

const impedanciaTotal = (r, xl, xc) => {
	return Math.sqrt(r ** 2 + Math.pow(xl - xc, 2));
};

// Xc

const reactanciaCapacitiva = (f, c) => {
	return 1 / (2 * Math.PI * f * c);
};

// Xl

const reactanciaInductiva = (f, l) => {
	return 2 * Math.PI * f * l;
};
