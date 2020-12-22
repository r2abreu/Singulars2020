(function() {
    let color = document.querySelector('[type="color"]');
    let div = document.querySelector('div')
    color.addEventListener('change',function() {
        colorea(div, this.value)
    })

})()

const colorea = (elem, color) => {
    elem.style.backgroundColor = color;
}