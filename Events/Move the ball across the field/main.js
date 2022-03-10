const field = document.getElementById('field');
const ball = document.getElementById('ball')


field.addEventListener('click', function({clientX, clientY}) {
    const spaceX = parseInt(getComputedStyle(field).marginLeft) + parseInt(getComputedStyle(field).borderLeft);
    const spaceY = parseInt(getComputedStyle(field).marginTop) + parseInt(getComputedStyle(field).borderTop);
    const ballWidth = parseInt(getComputedStyle(ball).width);
    const ballHeight = parseInt(getComputedStyle(ball).height);

    ball.style.left = `${clientX - spaceX - ballWidth / 2}px`;
    ball.style.top = `${clientY - spaceY - ballHeight / 2}px`;
})