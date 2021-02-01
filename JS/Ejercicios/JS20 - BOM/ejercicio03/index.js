let img = document.querySelector('img');
let routes = [ 'image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.jpg' ];

routes.forEach((route, index) => {
	setTimeout(() => {
		img.src = `./assets/${route}`;
	}, index * 1000);
});
