// For each of the following, give at least one way of how to access them:

// The <div> DOM node?
// The <ul> DOM node?
// The second <li> (with Pete)?

const div = document.getElementsByTagName('div')[0];
const ul = document.body.children[1];
const li_second = ul.children[1];
console.log(div, ul, li_second);
