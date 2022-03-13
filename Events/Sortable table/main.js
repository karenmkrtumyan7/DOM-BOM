const thRow = document.getElementById('grid').tHead.firstElementChild;
const tableBody = document.getElementById('grid').tBodies[0];

thRow.addEventListener('click', function({target}) {
    if (target.tagName != 'TH') return;

    const columnNumber = findColumnNumber(target);
    const sortType = target.dataset.type;

    const tableBodyTrs = tableBody.children;
    let sorted;

    if (sortType == 'number') {
        sorted = Array.from(tableBodyTrs).sort((first, second) => {
            const td1 = first.children[columnNumber];
            const td2 = second.children[columnNumber];
            return td1.innerText - td2.innerText;
        });
    } else {
        sorted = Array.from(tableBodyTrs).sort((first, second) => {
            const td1 = first.children[columnNumber];
            const td2 = second.children[columnNumber];
            return td1.innerText > td2.innerText ? 1 : -1;
        });
    }

    tableBody.append(...sorted);
});

function findColumnNumber(th) {
    return Array.from(thRow.children).findIndex((el) => el == th);
}