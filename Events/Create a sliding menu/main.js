const sweeties = document.getElementById('sweeties');
const heading = document.getElementById('heading');

function _switch() {
    if (sweeties.style.display == 'block') {
        sweeties.style.display = 'none';
        heading.classList.add('close');
    } else {
        sweeties.style.display = 'block';
        heading.classList.remove('close');
    }
}

function toggle() {
    console.log(heading.style.classList)
}

heading.addEventListener('click', _switch);