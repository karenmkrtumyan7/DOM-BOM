const links = document.querySelectorAll('ul li > a');

for (let i = 0; i < links.length; i++) {
    const a = links[i];
    const url = a.getAttribute('href');
    const exceptURL = 'http://internal.com';

    if (url.includes('://') && 
        !url.includes(exceptURL)
    ) {
        a.style.color = 'orange';
    }
}