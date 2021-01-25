(() => {
    let button = document.querySelector("button");
    button.addEventListener('click', handleClick);
})();

function handleClick() {
    document.body.firstElementChild.innerHTML = "Ahora cohetes!!";
    let listItems = document.getElementsByTagName('li');
    
    // Creamos nuevo array a partir de coleccion HTML para poder usar for Each.
    [...listItems].forEach(item => {
        item.style.color = '#00F';
    });

    [...document.images].forEach(image => {
        image.src = 'spacex.webp';
        image.alt = 'cochete de spacex';
        image.title = 'Spacex, exploración espacial!';
    })

}