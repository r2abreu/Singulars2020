const hamburguer = document.querySelector('[alt="hamburguer menu"').closest('figure');
const header = document.querySelector('header');
const image = document.querySelector('[title="Menu"]');
const mediaQueryList = window.matchMedia('(max-width: 850px)');

hamburguer.addEventListener('click', (event) => {
	if (header.classList.contains('expand')) {
		header.classList.toggle('expand');
		image.src = './assets/hamburguer.svg';
	} else {
		header.classList.toggle('expand');
		image.src = './assets/cross.svg';
	}
});

const expandTrigger = (event) => {
	if (event.matches) {
		header.classList.remove('expand');
	} else {
		header.classList.remove('expand');
	}
};
mediaQueryList.addListener(expandTrigger);

// Carousel

const images = document.querySelectorAll('.carousel img');
console.log(images);
let index = '0';
let amount = '0';
let currTransl = [];
let translationComplete = true;

const transitionComplete = () => {
	translationComplete = true;
};

amount = document.querySelectorAll('img').length;

images.forEach((image) => {
	currTransl[image] = -200;
	image.addEventListener('transitionend', transitionComplete);
});

const right = () => {
	console.log('right');
	if (translationComplete) {
		translationComplete = false;
		index--;
		if (index === -1) {
			index = amount - 1;
		}
		const outerIndex = index % amount;
		images.forEach((image) => {
			image.style.opacity = '1';
			image.style.transform = `translate(${currTransl[image] + 200}px)`;
			currTransl[image] = currTransl[image] + 200;
		});
		const outerImage = images[outerIndex];
		outerImage.style.transform = `translate(${currTransl[outerIndex] - 200 * amount}px)`;
		outerImage.style.opacity = '0.5';
		currTransl[outerIndex] = currTransl[outerIndex] - 200 * amount;
	}
};

const left = () => {
	console.log('left');
	if (translationComplete) {
		translationComplete = false;
		index++;
		let outerIndex = (index - 1) % amount;
		images.forEach((image) => {
			image.style.opacity = '1';
			image.style.transform = `translate(${currTransl[image] - 200}px)`;
			let outerImage = images[outerIndex];
			outerImage.style.transform = `translate(${currTransl[outerIndex] + 200 * amount}px)`;
			outerImage.style.opacity = '0.5';
			currTransl[outerIndex] = currTransl[outerIndex] + 200 * amount;
		});
	}
};

const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');
console.log(nextBtn);

nextBtn.addEventListener('click', right);
previousBtn.addEventListener('click', left);
