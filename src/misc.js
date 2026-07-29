export{misc}
import food from "./25.png"
import food2 from "./40.png"
import food3 from "./45.png"
import food4 from "./50.png"


function misc(){
let tira = new Image()
tira.src = food;
let jelly = new Image()
jelly.src = food2
let bDrink = new Image()
bDrink.src = food3
let tea = new Image()
tea.src = food4

let create = document.createElement("div")
 let border = document.createElement("h1")
 let items = document.createElement("div")
 let block = document.createElement("div")
 items.classList.add("items")
border.textContent = " Misc"
 content.textContent = ""
 create.classList.add("stuff")
  content.appendChild(create)
 content.appendChild(border)
     items.appendChild(tira)
     items.appendChild(jelly)
     items.appendChild(tea)
     items.appendChild(bDrink)
 create.appendChild(items)
 create.appendChild(block)
 
 for(let i= 0; i< 4; i++){
    
     
    let divram = document.createElement("div")
    divram.textContent= `Cost ${i}: $ ${4.52 + Math.random()* 2}`
  
    block.appendChild(divram);
 }

 

}