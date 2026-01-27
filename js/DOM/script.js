const p = document.createElement("p")
p.textContent = "Hey I'm Red!";
p.style.color = "red";
document.body.appendChild(p);

const h3 = document.createElement("h3")
h3.textContent = "I'm a blue h3!"
h3.style.color = "blue"
document.body.appendChild(h3);

const div = document.createElement("div")
div.style.border = "2px solid black";
div.style.backgroundColor = "pink";

const h1 = document.createElement("h1")
h1.textContent = "I'm in a div";

const p2 = document.createElement("p")
p2.textContent = "ME TOO!"

div.appendChild(h1)
div.appendChild(p2)

document.body.appendChild(div)
