const fauna = document.getElementById('fauna');

fauna.addEventListener('click', function (event) {
    if (event.target.tagName != 'LI') {
        return;
    }
    _switch(event.target);

})

function _switch(el) {
    for (let i = 0; i < el.children.length; i++) {
        el.children[i].hidden = !el.children[i].hidden;
    }
}