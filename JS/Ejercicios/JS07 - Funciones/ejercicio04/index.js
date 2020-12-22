(function() {
    let divs = document.querySelectorAll('div')
    divs.forEach(div => {
        div.addEventListener('mouseenter',function() {
            colorea(div, colorAleatorio())
        })
    })

})()

const colorea = (elem, color) => {
    elem.style.backgroundColor = color;
}

const colorAleatorio = () => {
    const valorAleatorio255 = () => Math.floor(Math.random() * 256);
    return `rgb(${valorAleatorio255()}, ${valorAleatorio255()}, ${valorAleatorio255()})`;
}