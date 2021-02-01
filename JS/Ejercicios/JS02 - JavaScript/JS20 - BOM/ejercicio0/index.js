(() => {
    let button = document.querySelector('button');
    button.addEventListener('click', handleClick);
})();

function handleClick() {
    let url = 'https://es.wikipedia.org/wiki/Embraer_Phenom_100';
    let name = 'Phenom 100'
    let features = 'width=300, height=300, top=200, left=200, resizable=off'
    window.open(url, name, features)
}