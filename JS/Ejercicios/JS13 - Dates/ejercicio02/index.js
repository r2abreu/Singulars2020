let end = new Date();
end.setHours(20, 0, 0, 0);
function initialize() {
    let times = document.querySelectorAll('span');
    let hours = times[0];
    let minutes = times[1];
    let seconds = times[2];
    hours.textContent = end.getHours().toString();
    minutes.textContent = end.getMinutes() < 10 ? `0${end.getMinutes().toString()}` : end.getMinutes().toString();
    seconds.textContent = end.getSeconds() < 10 ? `0${end.getSeconds().toString()}` : end.getSeconds().toString();
    end.setSeconds(end.getSeconds() - 1);
}
;
setInterval(initialize, 1000);
