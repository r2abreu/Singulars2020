const calcula = () => {
	var radio = parseFloat(document.querySelector('#radio').value);
	var opcion = document.querySelector('select').value;
	const PI = Math.PI;
	switch (opcion) {
		case 'area':
			alert(PI * radio ** 2);
			break;
		case 'perimetro':
			alert(2 * PI * radio);
			break;
		case 'diametro':
			alert(2 * radio);
			break;
		default:
			console.log('error');
	}
};
