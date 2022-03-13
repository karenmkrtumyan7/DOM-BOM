const field = document.getElementById('contents');

field.addEventListener('click', function(event) {
    const {target} = event;
    const closest_a = target.closest('a');
    
    if (closest_a) {
        const url = closest_a.getAttribute('href');
        const answer = confirm(`Leave for ${url}`);
        if (!answer) event.preventDefault();
    }
});

