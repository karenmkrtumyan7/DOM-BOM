const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', function(event) {
    event.preventDefault();
    const { target } = event;

    if (target.tagName == 'IMG') {
        const url = target.parentElement.getAttribute('href')
        largeImg.setAttribute('src', url)
    }
})