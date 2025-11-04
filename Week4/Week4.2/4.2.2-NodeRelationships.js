// select the root node because the root is the very top of the HTML document
let root = document.querySelector("html");

// select the last child of the root node

document.querySelector("html").lastElementChild;
// or
root.lastElementChild;


// select all the children of the body element
let body = querySelctor(body)
document.querySelector('body').children;

// select the next sibling of the h2 node
document.querySelector("h2").nextElementSibling;


// select the parent element of the h1 node
document.querySelector('h1').parentElement


consolet.log("innerhtml:", document.querySelector("nav").innerhtml);
document.querySelector("nav").innerhtml = "make this text what ever I want";
