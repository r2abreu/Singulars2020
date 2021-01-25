(() => {
    let button : HTMLButtonElement | null = document.querySelector('button');
    button ? button.addEventListener('click', handleClick) : null;
}
)();

function handleClick() : void {
    let output = document.querySelectorAll<HTMLElement>('output');
    // Create date object

    let date = new Date();
    output[0].textContent = JSON.stringify(date);

    // getDate()
    output[1].textContent = String(date.getDate());

    // getDay()
    output[2].textContent = String(date.getDay())

    // getFullyear()
    output[3].textContent = String(date.getFullYear())

}