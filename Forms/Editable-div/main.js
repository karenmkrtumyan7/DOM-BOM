const view = document.querySelector('#view');
const edit = document.createElement('textarea');
edit.classList.add('edit');

function changeState(incomer) {
    return ({ target }) => {
        console.log(incomer.tagName)
        if (incomer.tagName === 'TEXTAREA')
            incomer.value = target.innerText;
        else
            incomer.innerText = target.value;
        target.after(incomer);
        incomer.focus()
        target.remove(); 
    }
}

function onKeyDownMiddleware(keyCode) {
    return (event) => {
        if (event.keyCode === keyCode) 
            event.target.blur();
    }
}

view.addEventListener('click', changeState(edit));
edit.addEventListener('blur', changeState(view));
edit.addEventListener('keydown', onKeyDownMiddleware(13));
