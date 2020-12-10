const calcula = () => {
	var radio = parseFloat(document.querySelector('#radio').value);
	var perimetro = document.querySelector('#perimetro').checked;
	var area = document.querySelector('#area').checked;
	var diametro = document.querySelector('#diametro').checked;
	var resul = document.querySelector('#resul');
	var resultado = '';
	const PI = Math.PI;

	if (area) {
		resultado += `El area es ${parseFloat(PI * radio ** 2)}.`;
	}

	if (diametro) {
		resultado += `El diametro es ${parseFloat(2 * radio)}. `;
	}

	if (perimetro) {
		resultado += `El perimetro es ${parseFloat(2 * PI * radio)}.`;
	}

	resul.textContent = resultado;
};
