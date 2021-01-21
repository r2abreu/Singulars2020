(() => {
    let form = document.querySelector('form');
    form.addEventListener('submit', handleClick);
})();
function handleClick(event) {
    event.preventDefault();
    let input = document.querySelector('[type="text"]').value;
    let DOB = new Date(parseInt(input.slice(-4)), parseInt(input.slice(-6, -5)) - 1, parseInt(input.slice(0, 2)));
    daysLeft(DOB);
}
function daysLeft(DOB) {
    let todaysDate = new Date();
    let birthday = new Date(todaysDate.getFullYear(), DOB.getMonth(), DOB.getDate());
    let secondsToBirthday = (birthday.getTime() - todaysDate.getTime()) / 1000;
    let minutesToBirthday = secondsToBirthday / 60;
    let hoursToBirthday = minutesToBirthday / 60;
    let daysToBirthday = Math.ceil(hoursToBirthday / 24);
    displayResult(daysToBirthday);
}
function displayResult(daysToBirthday) {
    let output = document.querySelector('output');
    if (!daysToBirthday)
        congratulations();
    else
        output.textContent = `Aun faltan ${daysToBirthday} días para tu cumple`;
}
function congratulations() {
    let output = document.querySelector('output');
    output.classList.add('congratulations');
    output.textContent = 'FELICIDADES, HOY ES TU CUMPLE!!!';
    for (let i = 0; i < 20; i++) {
        let figure = document.createElement('figure');
        let img = document.createElement('img');
        figure.appendChild(img);
        figure.style.left = `${i * Math.floor(Math.random() * 10)}%`;
        figure.style.top = `${i * Math.floor(Math.random() * 10)}%`;
        console.log(figure.style);
        img.src = './balloons.gif';
        figure.addEventListener('animationend', () => {
            figure.remove();
        });
        document.body.appendChild(figure);
    }
}
