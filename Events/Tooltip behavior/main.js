const tooltips = Array.from(document.getElementsByTagName('button'));
let tooltip;

document.addEventListener('mouseover', ({target}) => {
    if (!target.dataset.tooltip)
        return;

    tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.innerText = target.dataset.tooltip;

    let coords = target.getBoundingClientRect();
    document.body.prepend(tooltip);

    let left = coords.left + (target.offsetWidth - tooltip.offsetWidth) / 2;
    left = left < 0 ? 0 : left; 

    let top = coords.top - tooltip.offsetHeight - 3;
    top = top < 0 ? coords.bottom + 3 : top;
    tooltip.style.transform = `translate(${left}px, ${top}px)`;
});

document.addEventListener('mouseout', ({target}) => {
    if (tooltip) {
        tooltip.remove();
        tooltip = null;
    }
})



