let count = 0;
let swipeCount = 3;
let swipe = 0;

function next() {
    const pics = document.getElementById('carousel').children;
    if (count + 1 > Math.floor(pics.length / swipeCount)) 
        return;
    
    count++;
    swipe = count * swipeCount < pics.length - swipeCount ? count * swipeCount : pics.length - swipeCount;
    
    Array.from(pics).forEach((el) => {
        el.style.transform = `translate(${swipe * (-100)}%)`
    });
}

function prev() {
    const pics = document.getElementById('carousel').children;
    if (count < 1)
        return;

    count--;
    swipe -= swipe > 3 ? 3 : swipe;
    
    Array.from(pics).forEach((el) => {
        el.style.transform = `translate(${swipe * (-100)}%)`
    });
}

document.getElementsByClassName('arrow')[1].addEventListener('click', next);
document.getElementsByClassName('arrow')[0].addEventListener('click', prev);