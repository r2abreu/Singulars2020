let img = document.querySelector('img');
let routes = [ 'image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.jpg' ];

setInterval(() => {
	routes.forEach((route, index) => {
		setTimeout(() => {
			img.src = `./assets/${route}`;
			img.alt = `Imagen ${index}`;
			img.title = `Imagen ${index}`;
		}, index * 1000);
	});
}, 4000);
