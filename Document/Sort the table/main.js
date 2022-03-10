const names = document.querySelectorAll('tbody tr')
const firstColumn = Array.from(names);
firstColumn.sort((first, second) => {
    return first.firstElementChild.innerText > second.firstElementChild.innerText ? 1 : -1;
});

const tbody = document.getElementById('table').tBodies[0];
tbody.append(...firstColumn);