// There’s a tree organized as nested ul/li.
// Write the code that adds to each <li> the number of its descendants. Skip leaves (nodes without children).

let lis = document.getElementsByTagName('li');

for (let li of lis) {
    const descendants = li.getElementsByTagName('li');
    if (descendants.length)
        li.firstChild.data += `[${descendants.length}]`;
}