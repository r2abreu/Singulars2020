let date = new Date();
function showTime() {
    date.setTime(date.getTime() + 1000);
    let time = date.toLocaleTimeString();
    let currentHour = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();
    let displayedHours = document.querySelector('span:first-of-type');
    let displayedMinutes = document.querySelector('span:nth-of-type(2)');
    let displayedSeconds = document.querySelector('span:nth-of-type(3)');
    let displayedMidday = document.querySelector('span:last-of-type');
    displayedHours.textContent = displayDigits(currentHour);
    displayedMinutes.textContent = displayDigits(currentMinutes);
    displayedSeconds.textContent = displayDigits(currentSeconds);
    displayedMidday.textContent = time.slice(-2);
    // console.log(time, midday)
}
function displayDigits(digits) {
    return digits < 10 ? `0${digits.toString()}` : digits.toString();
}
setInterval(showTime, 1000);
