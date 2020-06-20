//FOOTER


let names = ["CSS", "HTML", "JavaScript"];
let footerNotes = `This page was built using: ${names[0]}, ${names[1]}, and ${names[2]}.`;

let tag = document.querySelector('.end');
let text = document.createTextNode(footerNotes);
tag.appendChild(text);