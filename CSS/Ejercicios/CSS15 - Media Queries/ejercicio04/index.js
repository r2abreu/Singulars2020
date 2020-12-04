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

let buttons = document.querySelectorAll('button');
let [ right, left ] = buttons;
let images = document.querySelectorAll('main figure');
let slideWidth = images[0].getBoundingClientRect().width;
let carousel = document.querySelector('.carousel');
console.log(slideWidth);

buttons.forEach((button) => {
	button.addEventListener('click', function(event) {
		moveSlide(event.target);
	});
});

images.forEach((image, index) => {
	image.style.left = `${slideWidth * index}px`;
});

carousel.addEventListener('transitionend', function(event) {});

const moveSlide = (target) => {
	let currentSlide = document.querySelector('.current');
	let targetSlide;
	if (target.className === 'next') {
		targetSlide = currentSlide.nextElementSibling;
	} else {
		targetSlide = currentSlide.previousElementSibling;
	}
	let amountToMove = targetSlide.style.left;
	carousel.style.transform = `translatex(-${amountToMove})`;
	currentSlide.classList.toggle('current');
	targetSlide.classList.toggle('current');
};

carousel.addEventListener('transitionend', function(event) {
	if (carousel.firstElementChild.classList.contains('current')) {
		left.classList.add('hidden');
	} else {
		left.classList.remove('hidden');
	}
	if (carousel.lastElementChild.classList.contains('current')) {
		right.classList.add('hidden');
	} else {
		right.classList.remove('hidden');
	}
});
