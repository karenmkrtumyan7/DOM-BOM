// Write an interface to create a list from user input.

// For every list item:

// Ask a user about its content using prompt.
// Create the <li> with it and add it to <ul>.
// Continue until the user cancels the input (by pressing Esc or via an empty entry).
// All elements should be created dynamically.

// If a user types HTML-tags, they should be treated like a text.

const ul = document.createElement('ul');
document.body.append(ul);

for (let content = prompt("Type content"); content != "";) {
    const li = document.createElement('li');
    li.innerText = content;
    ul.append(li);
    content = prompt("Type content");
}