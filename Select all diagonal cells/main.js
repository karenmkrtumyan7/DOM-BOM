const trows = document.getElementsByTagName('tr');

for (let i = 0; i < trows.length; i++) {
    const td = trows[i];
    const tr_diagonal = td.children[i];
    tr_diagonal.style.backgroundColor = 'red';
}