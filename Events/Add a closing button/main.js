function deletePane(event) {
    event.currentTarget.parentElement.remove();
}

Array.from(document.getElementsByClassName('pane')).forEach((el) => {
    const button = document.createElement('button');
    button.classList.add('remove-button');
    button.innerText = "[x]";
    button.style.position = 'absolute';
    button.style.top = "5px";
    button.style.right = "10px";
    el.appendChild(button);
});

container.addEventListener('click', (event) => {
    event.target.parentElement.remove();
})