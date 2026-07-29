import "./cook.css";
import {home} from "./home.js"
import { misc } from "./misc.js";
import {menu} from "./menu.js"
import idle from "./Idle.png"
alert("Initalized Boss");
let space = new Image()
 space.src = idle;
let menus = document.getElementById("About")
let homes = document.getElementById("Home")
let miscs = document.getElementById("menu")
let h1 = document.createElement("h1");
let text = document.createElement("div");
let intro = document.createElement("div")
let content = document.getElementById("content");
 h1.textContent ="Cosmic Cafe"
content.appendChild(h1);
content.appendChild(text);
text.classList.add("text")
text.appendChild(intro);

 

intro.textContent="Welcome to Cosmic Cafe, We have so much for you to do and enjoy, come taste the best food in the galaxy!"

miscs.addEventListener("click", event => {
    misc();
     miscs.style.color = "blue"
})
homes.addEventListener("click", event => {
    home();
     homes.style.color = "blue"
})
menus.addEventListener("click", event => {
    menu();
    menus.style.color = "blue"
})


