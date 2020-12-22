(function(){
    let submit = document.querySelector('[type="submit"]');
    let figure = document.querySelector('figure');
    
    submit.addEventListener('click', function() {
        let input = document.querySelector('[type="number"]').value;
        escalar(figure, input )
    })
})()

const escalar = (elem, percentage) => {
    elem.style.transform = `scale(${percentage})`
}