// content.js

// Create the meta tag element
const metaTag = document.createElement('meta');

// Set the attributes of the meta tag
metaTag.setAttribute('http-equiv', 'Content-Security-Policy');
metaTag.setAttribute('content', "default-src * self blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; script-src-elem * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;");

// Append the meta tag to the head section of the document
document.head.appendChild(metaTag);


// Load the external JavaScript file
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/gh/imabutahersiddik/decentralized-web@main/public/js/d-web.js";
document.body.appendChild(script);


// Create the <div> and <a> elements
const divElement = document.createElement("div");
divElement.id = "encrypted-html";

const aElement = document.createElement("a");
aElement.href = "";
aElement.classList.add("d-web-link");
aElement.id = "d-web-link";
aElement.textContent = "Open Decentralized Page";
aElement.setAttribute("onclick", "encrypt()");

// Append the elements to the end of the <body> tag
document.body.appendChild(divElement);
document.body.appendChild(aElement);
