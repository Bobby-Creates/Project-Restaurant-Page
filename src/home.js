export{home}


function home() {
    let content = document.getElementById("content");
    content.textContent = ""
    let homes = document.getElementById("Home")
let miscs = document.getElementById("menu")
let h1 = document.createElement("h1");
let text = document.createElement("div");
let intro = document.createElement("div")

 h1.textContent ="Cosmic Cafe"
content.appendChild(h1);
content.appendChild(text);
text.classList.add("text")
text.appendChild(intro);



intro.textContent="Welcome to Cosmic Cafe, We have so much for you to do and enjoy, come taste the best food in the galaxy!"

}