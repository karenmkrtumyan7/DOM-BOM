const mouse = document.getElementById('mouse');

function move(event) {
    const transform = getComputedStyle(mouse).transform.split(',').map((n) => parseInt(n));
    const translateX = transform[4] ? transform[4] : 0;
    const translateY = transform[5] ? transform[5] : 0;

    console.log(transform)

    switch(event.keyCode) {
        case 37: mouse.style.transform = `translate(${translateX - 100}px, ${translateY}px)`;
            break;
        case 38: mouse.style.transform = `translate(${translateX}px, ${translateY - 100}px)`;
            break;  
        case 39: mouse.style.transform = `translate(${translateX + 100}px, ${translateY}px)`;
            break; 
        case 40: mouse.style.transform = `translate(${translateX}px, ${translateY + 100}px)`;
            break;        
    }
}

mouse.addEventListener('keydown', move);
mouse.removeEventListener('blur', move)