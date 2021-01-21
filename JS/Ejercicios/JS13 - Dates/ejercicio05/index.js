(() => {
	let form = document.querySelector('form');
	form.addEventListener('submit', handleSubmit);
})();
function handleSubmit(event) {
	event.preventDefault();
	let inputs = document.querySelectorAll('input');
	let newDate = {
		day: +inputs[0].value,
		month: +inputs[1].value,
		year: +inputs[2].value,
		hour: +inputs[3].value,
		minutes: +inputs[4].value,
		seconds: +inputs[5].value
	};
	let targetDate = new Date(
		newDate.year,
		newDate.month - 1,
		newDate.day,
		newDate.hour,
		newDate.minutes,
		newDate.seconds
	);
	setInterval(() => {
		createCountdown(targetDate);
	}, 1000);
}
function createCountdown(targetDate) {
	let now = new Date();
	let countdownInSeconds = 0;
	if (now > targetDate) {
		console.log('La fecha que has introducido se encuentra en el pasado');
	} else {
		countdownInSeconds = Math.floor((targetDate.getTime() - now.getTime()) / 1000);
	}
	let countdown = {
		days: Math.floor(countdownInSeconds / 3600 / 24),
		hours: Math.floor((countdownInSeconds / 3600) % 24),
		minutes: Math.floor((countdownInSeconds / 60) % 60),
		seconds: countdownInSeconds % 60
	};
	showResult(countdown);
}
function showResult(countdown) {
	let days = document.querySelector('p');
	let hour = document.querySelector('span:first-of-type');
	let minute = document.querySelector('span:nth-of-type(2)');
	let seconds = document.querySelector('span:last-of-type');
	days.textContent = `Quedan ${countdown.days} dias:`;
	hour.textContent = `${displayDigits(countdown.hours)}:`;
	minute.textContent = `${displayDigits(countdown.minutes)}:`;
	seconds.textContent = displayDigits(countdown.seconds);
}

function displayDigits(digits) {
	return digits < 10 ? `0${digits.toString()}` : digits.toString();
}
