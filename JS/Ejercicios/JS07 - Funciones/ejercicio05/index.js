(function() {
    let images = document.querySelectorAll('img');

    images.forEach(image => {
        image.addEventListener('mouseenter', function() {
            escalar(this, 1.3);
        })
        image.addEventListener('mouseleave', function() {
            escalar(this, 1);
        })

        image.addEventListener('click', function() { 
            let color = document.querySelector('[type="color"]').value;
            colorea(this.parentElement, color)
            console.log(this.style.backgroundColor)
        })
    })
})()

const escalar = (elem, percentage) => {
    elem.style.transform = `scale(${percentage})`
}

const colorea = (elem, color) => {
    elem.style.backgroundColor = color;
}