let iterations = [];
let intervalId = setInterval(popup, 2000);

(() => {
    let button = document.querySelector('button');
    button.addEventListener('click', () => {
       clearInterval(intervalId)
       iterations.forEach(frame => {
           frame.close();
       })
    })
})();

function popup() {
        let url = 'https://i.imgur.com/U3fQrBL.jpg';
        let name = 'Nuevo Meme';
        let features = `width=300, height=300, top=${randomCoord()}, left=${randomCoord()}`;
        let newAdd = window.open(url, name, features);
        iterations.push(newAdd);
        console.log(iterations)
    
}

function randomCoord() {
    return Math.floor(Math.random() * 500);
}