// Here’s the document with the table and form.

// How to find?…

// The table with id="age-table".
// All label elements inside that table (there should be 3 of them).
// The first td in that table (with the word “Age”).
// The form with name="search".
// The first input in that form.
// The last input in that form.

const table = document.getElementById('age-table');
const tableLables = table.getElementsByTagName('label');
const firstTd = table.getElementsByTagName('td')[0];
const form = document.getElementsByName('search')[0];
const input = form.getElementsByTagName('input')[0];
let lastInput = form.querySelectorAll('input');
lastInput = lastInput[lastInput.length - 1];