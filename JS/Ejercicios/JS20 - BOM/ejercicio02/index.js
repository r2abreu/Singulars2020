(() => {
    let button = document.querySelector('button');
    button.addEventListener('click', handleClick);
})();

function handleClick({target}) {
    disableButton(target);
}

 function disableButton(target) {
    target.classList.add('disabled');
    createImage();
    createDiv();
    mountAndUnmount('p', 'textContent', 'Hola', '1000');
 
    let timeoutId = setTimeout(() => {
        target.classList.remove('disabled'); 
    }, 5000)
}

function createImage() {
    let figure = document.createElement('figure');
    let image = document.createElement('img');
    image.src = './assets/image4.jpg'
    figure.appendChild(image);
    document.body.appendChild(figure);

    
    setTimeout(() => figure.remove(), 2000)
}

function createDiv() {
    let div = document.createElement('div');
    div.style.backgroundColor = '#F00';

    document.body.appendChild(div);

    setTimeout(() => div.remove(), 2000)
}

function createParragraph() {
    let parragraph = document.createElement('p');
    parragraph.textContent = 'Hola';

    document.body.appendChild(parragraph);

    setTimeout(() => parragraph.remove(), 2000)
}

function mountAndUnmount(ele, attr, value, delay, child) {
    let element = document.createElement(ele);
    element[attr] = value;

    document.body.appendChild(element);
    console.log(element)
    setTimeout(() => element.remove(), delay)
}